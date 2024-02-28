<template>
  <div @click="$emit('clickBtn')" class=" btn-primary flex justify-center items-center">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export  default  Vue.extend({
  props:{
    text:{
      type:String
    },
  }
})
</script>

<style>

</style>
