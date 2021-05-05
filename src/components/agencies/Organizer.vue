<template>
  <div>
    <ContentWrapper>
      <div class="container w-11/12 m-auto text-center">
        <Title>主辦單位</Title>
        <div class="md:flex md:items-center md:justify-center">
          <div class="w-3/10 mx-auto mb-4 max-w-100px md:mx-0 md:mr-1/20 md:mb-0 md:max-w-120px">
            <a href="https://www.businesstoday.com.tw/" target="_blank">
              <img src="../../assets/images/businesstoday.svg" alt="今周刊">
            </a>
          </div>
          <div class="inline-flex flex-col">
            <a class="flex items-center mb-2 md:my-2" href="https://www.facebook.com/BToday" target="_blank">
              <img src="../../assets/images/fb.png" alt="今周刊粉絲團" class="w-40px lg:w-50px" />
              <p class="text-lg ml-2">立即加入今周刊粉絲團</p>
            </a>
            <a class="flex items-center mb-2 md:my-2" href="https://businesstoday.page.link/3Pja" target="_blank">
              <img src="../../assets/images/app.png" alt="今周刊APP" class="w-40px lg:w-50px" />
              <p class="text-lg ml-2">下載App，掌握即時財經動脈</p>
            </a>
          </div>
        </div>
      </div>
    </ContentWrapper>

    <!-- 其他協辦 -->
    <ContentWrapper v-for="agencies in getAgencies" :key="agencies.index">
      <div class="container w-11/12 m-auto text-center">
        <Title>{{ agencies.title }}</Title>
        <ul class="flex flex-wrap justify-between max-w-1366 mx-auto md:justify-start">
          <li
            v-for="list in agencies.list"
            :key="list.index"
            class="w-1/2 my-2 md:w-1/3 px-2 md:px-4 md:my-4"
          >
            <a v-if="list.url" :href="list.url" target="_blank">
              <img :src="list.image" :alt="list.title" class="mx-auto" />
            </a>
            <img v-else :src="list.image" :alt="list.title" class="mx-auto" />
          </li>
        </ul>
      </div>
    </ContentWrapper>
  </div>
</template>

<script>
import ContentWrapper from '../models/ContentWrapper'
import Title from '../models/Title'

export default {
  name: 'Organizer',
  components: {
    ContentWrapper,
    Title
  },
  computed: {
    getAgencies() {
      return this.$store.state.indexData.agencies;
    }
  }
}
</script>
