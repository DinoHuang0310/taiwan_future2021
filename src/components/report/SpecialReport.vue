<template>
  <ContentWrapper
    v-if="getSpecialReport"
    class="overflow-hidden"
    :setBackground="{type: 'fixed', value: backgroundImage}"
  >
    <div class="container w-11/12 m-auto text-center">
      <Title :englishTitle="getSpecialReport.titleEN">{{ getSpecialReport.title }}</Title>
    </div>
    <div class="w-11/12 md:w-full m-auto">
      <BtnetSlider v-if="getSpecialReport" :sliderData="getSpecialReport.list" />
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from '../models/ContentWrapper'
import Title from '../models/Title'
import BtnetSlider from './BtnetSlider'

import backgroundImage from '../../assets/images/background.png'

export default {
  name: 'SpecialReport',
  components: {
    ContentWrapper,
    Title,
    BtnetSlider
  },
  data() {
    return {
      backgroundImage
    }
  },
  computed: {
    getSpecialReport() {
      return this.$store.state.indexData.specialreport;
    }
  }
}
</script>
