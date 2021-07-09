<template>
  <ContentWrapper v-if="getIssue">
    <div class="container w-11/12 m-auto text-center">
      <Title :englishTitle="getIssue.titleEN">{{ getIssue.title }}</Title>
      <div class="relative text-white">
        <div class="flex flex-wrap">
          <ColorCard
            class="bg-card-green w-1/2 md:w-1/4 p-2 md:p-4 min-h-28 md:min-h-40"
            :article="getIssue.list[0].title"
            @click.native="show(0, colorCodes.green)"
          />
          <ColorCard
            class="bg-card-red w-1/2 md:w-1/4 p-2 md:p-4 min-h-28 md:min-h-40"
            :article="getIssue.list[1].title"
            @click.native="show(1, colorCodes.red)"
          />
          <ColorCard
            class="bg-card-yellow w-1/2 md:w-1/4 p-2 md:p-4 min-h-28 md:min-h-40"
            :article="getIssue.list[2].title"
            @click.native="show(2, colorCodes.yellow)"
          />
          <ColorCard
            class="bg-card-gray w-1/2 md:w-1/4 p-2 md:p-4 min-h-28 md:min-h-40"
            :article="getIssue.list[3].title"
            @click.native="show(3, colorCodes.gray)"
          />
        </div>
        <div class="flex flex-wrap">
          <ColorCard
            class="bg-card-green md:bg-card-yellow w-1/2 md:w-1/3 p-2 md:p-4 min-h-28 md:min-h-40"
            :article="getIssue.list[4].title"
            @click.native="show(4, isBigScreen ? colorCodes.yellow : colorCodes.green)"
          />
          <ColorCard
            class="bg-card-red w-1/2 p-2 min-h-28 md:min-h-40 md:hidden"
            :article="getIssue.list[5].title"
            @click.native="show(5, colorCodes.red)"
          />
          <ColorCard
            class="bg-card-yellow w-1/2 p-2 min-h-28 md:min-h-40 md:hidden"
            :article="getIssue.list[6].title"
            @click.native="show(6, colorCodes.yellow)"
          />
          <div class="hidden md:flex flex-col flex-1">
            <ColorCard
              class="bg-card-gray p-4 flex-1 min-h-28 md:min-h-40"
              :article="getIssue.list[5].title"
              @click.native="show(5, colorCodes.gray)"
            />
            <ColorCard
              class="bg-card-red p-4 flex-1 min-h-28 md:min-h-40"
              :article="getIssue.list[6].title"
              @click.native="show(6, colorCodes.red)"
            />
          </div>
          <ColorCard
            class="bg-card-gray md:bg-card-green w-1/2 md:w-1/3 p-2 md:p-4"
            :article="getIssue.list[7].title"
            @click.native="show(7, isBigScreen ? colorCodes.green : colorCodes.gray)"
          />
        </div>
        <!-- detail -->
        <transition name="fade">
          <div
            v-if="showDetail"
            class="absolute flex justify-center items-center w-full h-full top-0 left-0 p-4 color-card z-20"
            :style="{background: showDetail.bgcolor}"
          >
            <article class="relative md:px-1/20">
              <h3 class="text-left sm:text-center text-3xl mb-4" v-html="getIssue.list[showDetail.showindex].title.replace(/<br>/g, ' ')" />
              <div class="text-left sm:text-center" v-html="getIssue.list[showDetail.showindex].description" />
            </article>
            <v-icon
              class="absolute top-2 right-2 md:top-4 md:right-4 cursor-pointer"
              name="times-circle"
              scale="3"
              @click="close()"
            />
          </div>
        </transition>
      </div>
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from '../models/ContentWrapper'
import Title from '../models/Title'
import ColorCard from './ColorCard';

import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/times-circle'

export default {
  name: 'KeyIssue',
  components: {
    ContentWrapper,
    Title,
    ColorCard,
    'v-icon': Icon
  },
  data() {
    return {
      isBigScreen: false,
      windowWidth: null,
      colorCodes: {
        green: '#5D9DA6',
        red: '#CF635A',
        yellow: '#F1B150',
        gray: '#4B5058'
      },
      showDetail: false
    }
  },
  computed: {
    getIssue() {
      return this.$store.state.indexData.issue;
    }
  },
  methods: {
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth !== this.windowWidth) {
        this.isBigScreen = clientWidth >= 768 ? true : false;
        this.windowWidth = clientWidth;
      }
    },
    show(index, color) {
      this.showDetail = {
        showindex: index,
        bgcolor: color
      };
    },
    close() {
      this.showDetail = false;
    }
  },
  mounted() {
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen);
  }
}
</script>

<style>
.color-card::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .1);
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  -webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
}
.color-card p:first-letter {
  font-size: 1.3rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
