<template>
  <ContentWrapper v-if="getReport" class="overflow-hidden">
    <div class="container w-11/12 m-auto text-center">
      <Title :englishTitle="getReport.titleEN">{{ getReport.title }}</Title>
    </div>
    <div class="w-11/12 md:w-full m-auto">
      <BtnetSlider v-if="getReport" :sliderData="getReport.list" />
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from '../models/ContentWrapper'
import Title from '../models/Title'
import BtnetSlider from './BtnetSlider'

export default {
  name: 'Report',
  components: {
    ContentWrapper,
    Title,
    BtnetSlider
  },
  computed: {
    getReport() {
      return this.$store.state.indexData.report;
    }
  }
}
</script>
