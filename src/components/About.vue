<template>
  <div>
    <ContentWrapper v-if="getAbout" :setBackground="{type: 'fixed', value: backgroundImage}">
      <article class="container w-11/12 m-auto text-center text-white">
        <Title :englishTitle="getAbout.titleEN">{{ getAbout.title }}</Title>
        <!-- <div class="text-center">
          <div class="inline-block text-left">
            <p class="mb-3" v-for="list in getAbout.article" :key="list.index">
              <span v-for="text in list" :key="text.index">
                {{ text }}<br>
              </span>
            </p>
          </div>
        </div> -->
        <p class="mb-3" v-for="list in getAbout.article" :key="list.index">
          <span v-for="text in list" :key="text.index">
            {{ text }}<br>
          </span>
        </p>
      </article>
    </ContentWrapper>
    <ContentWrapper v-if="getSpotlight">
      <div class="container w-11/12 m-auto text-center">
        <Title>{{ getSpotlight.title }}</Title>
        <ul class="flex flex-wrap justify-around">
          <li
            v-for="list in getSpotlight.list"
            :key="list.index"
            class="relative w-9/20 pb-9/20 my-2 md:w-3/10 md:pb-3/10 xl:w-1/5 xl:pb-1/5 xl:my-6"
          >
            <div class="absolute flex flex-col w-full h-full border-red border-2 rounded-full overflow-hidden">
              <h3
                class="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-red font-notoblack font-bold pt-1/8 lg:pt-1/5 pb-1 lg:pb-3"
              >{{ list.title }}</h3>
              <p class="flex-1 text-sm sm:text-base tracking-normal px-2 lg:px-6 lg:tracking-widest">
                <span v-for="text in list.description" :key="text.index">{{ text }}<br></span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </ContentWrapper>
  </div>
</template>

<script>
import ContentWrapper from './models/ContentWrapper'
import Title from './models/Title'

import backgroundImage from '../assets/images/about.jpg'

export default {
  name: 'About',
  components: {
    ContentWrapper,
    Title,
  },
  data() {
    return {
      backgroundImage
    }
  },
  computed: {
    getAbout() {
      return this.$store.state.indexData.about;
    },
    getSpotlight() {
      return this.$store.state.indexData.spotlight;
    }
  }
}
</script>
