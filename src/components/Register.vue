<template>
  <ContentWrapper v-if="getRegister">
    <div class="container w-11/12 m-auto text-center">
      <Title :englishTitle="getRegister.titleEN">{{ getRegister.title }}</Title>
      <!-- 開放報名 -->
      <div v-if="getRegister.state">
        <div class="flex flex-wrap justify-center md:justify-between lg:justify-center">
          <div
            v-for="list in getRegister.tickettype"
            :key="list.index"
            class="flex flex-col w-full m-1/40 md:w-12/25 md:m-0 md:mb-4 lg:w-1/3 lg:m-1/40"
          >
            <div class="relative flex justify-center items-center flex-1 p-4 md:p-8 2xl:py-4 border-2 border-red">
              <img class="absolute bottom-0 left-0 w-1/3" src="../assets/images/ticket_bg.png" alt="">
              <div class="relative">
                <h4 class="text-xl mb-2 xl:mb-1" v-html="list.type" />
                <div class="font-notoblack font-bold text-3xl xl:text-4xl text-red mb-4 xl:mb-4">{{ list.value }}</div>
                <p class="mb-2" v-html="list.description" />
              </div>
            </div>
            <a
              :href="list.url"
              target="_blank"
              class="flex w-full justify-center items-center p-4 bg-red text-white text-xl"
            >
              立即購票
              <v-icon
                name="shopping-cart"
                scale="1.8"
                class="ml-1"
              />
            </a>
          </div>
        </div>
        <p class="mb-4">座位有限，欲購從速！</p>
      </div>

      <!-- 報名截止 -->
      <div v-else class="flex mb-4 justify-center">
        <p class="bg-yellow text-xl font-black w-4/5 md:w-1/2 xl:w-1/4 p-8 md:p-10 xl:py-12">
          {{ getRegister.closeMessage }}
        </p>
      </div>

      <!-- 報名須知 -->
      <ul class="text-left lg:max-w-alert m-auto" v-if="getRegister.alert.length">
        <li
          v-for="list in getRegister.alert"
          :key="list.index"
          class="relative pl-6 mb-2"
        >
          <i class="absolute -left-0 not-italic">※</i>
          <p v-html="list" />
        </li>
      </ul>
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from './models/ContentWrapper'
import Title from './models/Title'

import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/shopping-cart'

export default {
  name: 'Register',
  components: {
    ContentWrapper,
    Title,
    'v-icon': Icon
  },
  computed: {
    getRegister() {
      return this.$store.state.indexData.register;
    }
  }
}
</script>
