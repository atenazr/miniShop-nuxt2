<template>
  <div class="flex items-center">
      <div dir="ltr" class="flex items-end">
            <span v-for="score in fullStars" :key="score" class="text-xs lg:text-base material-icons">star</span>
            <span v-for="score in halfStars" :key="score+10" class="text-xs lg:text-base material-symbols-outlined">star_half</span>
            <span v-for="score in emptyStars" :key="score+20" class="text-xs lg:text-base material-symbols-outlined">star</span>
      </div>
      <div class="text-xs text-secondary-gray mx-2">
          {{ '('+countRate+')' }}
      </div>
  </div>
</template>

<script lang="ts" >
import Vue from "vue"

export default Vue.extend({
  props:{
    defaultScore:{
      type:Number,
      default:0
    },
    countRate:{
      type:Number,
      default:0
    }
  },
  computed:{
    fullStars():any{
      return Math.floor(this.defaultScore /1)
    },
    halfStars():any{
      let x = this.defaultScore %1
      return x >= (1/2) ? 1 : 0
    },
    emptyStars():number{
      return 5 - this.fullStars - this.halfStars
    }
  }
})
</script>

<style scoped></style>
