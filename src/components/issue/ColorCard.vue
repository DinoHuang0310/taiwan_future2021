<template>
  <div
    class="color-card flex justify-center items-center relative cursor-pointer transform transition has-hover:hover:underline has-hover:hover:scale-105 has-hover:hover:z-10">
    <p class="relative" v-html="article" />
  </div>
</template>

<script>
export default {
  name: 'ColorCard',
  props: {
    article: {
      type: String,
      required: true
    }
  }
}
</script>
