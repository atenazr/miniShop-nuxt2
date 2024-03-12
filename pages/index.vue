<script lang="ts">
import Vue from "vue"
import type { IProduct } from "~/utils/types";
import Spinner from "~/components/shared/Spinner.vue";
import productCard from "~/components/products/productCard.vue"
import GlobalBtn from "~/components/shared/GlobalBtn.vue";
import { useProductsStore } from '~/store/product'
import { mapActions } from 'pinia'
export  default  Vue.extend({
  components:{
    Spinner,
    productCard,
    GlobalBtn
  },
  data(){
    return{
      loading:null as unknown,
      products:[] as IProduct[]
    }
  },

  async fetch() {
    this.loading = true
    const [res,err] = await this.loadProducts() as [any,any]
      if (res.length > 0) {
        this.products = res
      }
    this.loading = false
  },

  methods:{
    ...mapActions(useProductsStore,['loadProducts']),
    deleteProduct(id:number){
      //     delete number
      console.log('id',id)
    },
    editProduct(id:number){
      //     edit number
      console.log('id',id)
    },
    addProduct(){
      //   adding product
    }
  }
})
</script>

<style lang="scss">
</style>

<template>
  <div class="container mx-auto">
    <Spinner class="my-10" v-if="loading" />
    <section v-else class="w-full py-4 lg:py-6">
      <div class="mb-2.5 lg:mb-4 px-6 lg:px-8 flex items-center justify-between">
          <div class="text-xl lg:text-3xl font-bold text-dark-gray">
            Products
          </div>
        <div class="w-32 lg:w-40">
          <GlobalBtn class="text-base lg:!text-xl" text="Add Product" @clickBtn="addProduct" ></GlobalBtn>
        </div>
      </div>
          <div v-if="products.length > 0 " class="w-full flex justify-start items-start flex-wrap">
              <productCard
              v-for="(product,index) in products"
              :key="index"
              :product="product"
              @editProduct="editProduct"
              @deleteProduct="deleteProduct"
              ></productCard>
          </div>

          <div v-else class="w-full text-center">
              this list is empty!!
          </div>
    </section>
  </div>
</template>
