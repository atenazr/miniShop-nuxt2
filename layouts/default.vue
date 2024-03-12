<script lang="ts">
import Navbar from './sections/Navbar.vue';
import Vue from "vue"
export  default  Vue.extend({
  components:{
    Navbar
  }
})
</script>

<template>
  <div class="">
    <Navbar></Navbar>
    <section class="pt-6 lg:pt-0 ">
          <Nuxt />

    </section>
  </div>
</template>
