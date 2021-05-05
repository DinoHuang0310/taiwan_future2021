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
    <ContentWrapper v-if="getVideo" class="overflow-hidden">
      <div class="container w-11/12 m-auto text-center">
        <Title>{{ getVideo.title }}</Title>
        <slick :options="slickOptions" class="max-w-1366 mx-auto">
          <div
            v-for="list in getVideo.list"
            :key="list.index"
            class="px-1/20"
          >
            <div class="relative pb-mediabox">
              <YoutubePlayer
                :videoId="list"
                :active="activeVideo"
                v-on:setActiveVideo="setActiveVideo"
                class="absolute w-full h-full top-0 left-0"
              />
            </div>
          </div>
        </slick>
      </div>
    </ContentWrapper>
  </div>
</template>

<script>
import ContentWrapper from './models/ContentWrapper'
import Title from './models/Title'
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import YoutubePlayer from './YoutubePlayer'

import backgroundImage from '../assets/images/about.jpg'

export default {
  name: 'About',
  components: {
    ContentWrapper,
    Title,
    Slick,
    YoutubePlayer,
  },
  data() {
    return {
      backgroundImage,
      slickOptions: {
        infinite: false,
        autoplay: false,
        autoplaySpeed : 3000,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      activeVideo: '' // 當前播放中的影片ID
    }
  },
  computed: {
    getAbout() {
      return this.$store.state.indexData.about;
    },
    getVideo() {
      return this.$store.state.indexData.video;
    },
    getSpotlight() {
      return this.$store.state.indexData.spotlight;
    }
  },
  methods: {
    setActiveVideo(id) {
      this.activeVideo = id;
    }
  }
}
</script>

<style>
#about .slick-arrow {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  transform: translate(0, -50%);
  font-size: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
  z-index: 1;
}
.slick-arrow:before {
  display: none;
}
#about .slick-prev {
  left: -5%;
  background-image: url('../assets/images/chevron-left-solid.svg');
}
#about .slick-next {
  right: -5%;
  background-image: url('../assets/images/chevron-right-solid.svg');
}
.slick-disabled {
  opacity: .2;
}
@media (min-width: 640px) {
  #about .slick-arrow {
    width: 40px;
    height: 40px;
  }
  #about .slick-prev {
    left: 0;
  }
  #about .slick-next {
    right: 0;
  }
}
</style>
