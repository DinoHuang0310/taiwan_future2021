<template>
  <h2 class="text-4xl pb-10 md:text-6xl md:pb-12">
    <slot />
    <div class="text-2xl md:text-3xl pt-3" v-if="englishTitle">{{ englishTitle }}</div>
  </h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    englishTitle: {
      type: String,
      required: false
    }
  }
}
</script>
