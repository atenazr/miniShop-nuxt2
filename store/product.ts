import { defineStore } from 'pinia'
import type { IProduct } from "~/utils/types";

export const useProductsStore = defineStore('products', {
    state: () => (
      {
        _products:[] as IProduct[],
      }
    ),

    getters: {
      products: (state) => state._products,
    },

    actions: {
      async loadProducts() {
          try {
              const response = await fetch('https://fakestoreapi.com/products/')
              console.log('respo',response)
              if(response.ok) {
                  const res = await response.json()
                  console.log('reeee',res)
                  return [res, null]
              }
          } catch (e) {
              // Error Handler
              console.log('eee',e)
              return [null,'error']
          }
      },
    },

})
