<template>
  <ContentWrapper v-if="getAddress" :setBackground="{type: 'fixed', value: backgroundImage}">
    <div class="lg:flex">
      <!-- information -->
      <div class="flex justify-center lg:justify-end lg:items-center lg:w-1/2">
        <div class="mb-4 lg:mb-0 lg:mr-1/40">
          <Title class="text-center lg:text-left">{{ getAddress.title }}</Title>
          <div class="w-11/12 md:w-auto m-auto md:text-lg pb-2">因應疫情守護健康，舉辦日期調整</div>
          <table class="w-11/12 md:w-auto m-auto md:text-lg">
            <tbody>
              <tr>
                <td class="w-px whitespace-nowrap pl-0 pr-2 pb-4 align-top">日期: </td>
                <td class="pl-0 md:px-2 pb-2 tracking-wider" v-html="getAddress.date" />
              </tr>
              <tr>
                <td class="w-px whitespace-nowrap pl-0 pr-2 pb-4 align-top">地點: </td>
                <td class="pl-0 md:px-2 pb-2" v-html="getAddress.address" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- map -->
      <div class="relative pb-mediabox md:pb-3/10 lg:pb-0 lg:w-2/5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7230.439704364939!2d121.549282!3d25.026612000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa32657c4a79%3A0x3d7f7c44e7d85df7!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5pWm5YyW5Y2X6Lev5LqM5q61MjAx6Jmf!5e0!3m2!1szh-TW!2stw!4v1618390947929!5m2!1szh-TW!2stw"
          frameborder="0"
          aria-hidden="false"
          tabindex="0"
          class="absolute w-full h-full top-0 left-0"
        />
      </div>
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from './models/ContentWrapper'
import Title from './models/Title'

import backgroundImage from '../assets/images/background.png'

export default {
  name: 'Address',
  components: {
    ContentWrapper,
    Title
  },
  data() {
    return {
      backgroundImage
    }
  },
  computed: {
    getAddress() {
      return this.$store.state.indexData.address;
    }
  }
}
</script>
