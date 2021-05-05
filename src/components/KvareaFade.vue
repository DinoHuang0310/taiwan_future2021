<template>
  <div
    class="relative flex justify-center items-center overflow-hidden"
    :style="{'height': windowHeight + 'px'}"
  >
    <div
      class="absolute top-0 left-0 w-full h-full -z-1 has-hover:bg-fixed bg-black"
      :style="{'background-image': `url('${img}')`, 'background-size': 'cover', 'background-position': 'center'}"
    />
    <div class="w-11/12 sm:w-10/12 lg:w-2/3 max-w-1366 mx-auto">
      <transition>
        <img
          class="m-auto mb-4 max-w-3/5 md:max-w-2/5 lg:max-w-max lg:mb-0"
          src="../assets/images/event_name.png"
          alt="台灣大未來"
          @load="imgloaded()"
          v-show="loaded"
        >
      </transition>
      <div class="relative pb-1/8 my-8 md:my-6">
        <ul
          v-if="sloganElement"
          v-html="sloganElement"
          class="absolute flex w-full"
        />
        <transition>
          <div
          v-show="loaded === 2"
            class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 md:w-1/2 h-0.5 bg-gradient-to-r from-white-op0 via-white to-white-op0"
          />
        </transition>
        
      </div>
      <img
        src="../assets/images/event.png"
        :class="loaded === 2 ? 'm-auto w-3/4 md:w-1/2 animate-fadeInDown1s' : 'm-auto w-3/4 md:w-1/2 opacity-0'"
      >
    </div>
    <IcoScrollDown class="absolute left-1/2 bottom-8 xl:bottom-16 transform -translate-x-1/2" />
  </div>
</template>

<script>
import IcoScrollDown from './models/IcoScrollDown'
import backgroundImage from '../assets/images/kvbackground.jpg'

export default {
  name: 'Kvarea',
  components: {
    IcoScrollDown
  },
  data() {
    return {
      windowWidth: null,
      windowHeight: null,
      img: backgroundImage,
      sloganElement: '',
      appendIndex: 1,
      loaded: 0
    }
  },
  methods: {
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if(clientWidth !== this.windowWidth) {
        this.windowWidth = clientWidth;
        this.windowHeight = document.documentElement.clientHeight;
      }
    },
    imgloaded() {
      this.loaded++;
      this.runAnimate();
    },
    runAnimate() {
      const addElement = setInterval(() => {
        if(this.appendIndex > 8) {
          clearInterval(addElement);
          this.loaded++;
        } else {
          const className = this.appendIndex === 4 ? 'w-3/25 mr-1/25 animate-fadeIn1/2s' : 'w-3/25 animate-fadeIn1/2s';
          this.sloganElement =
            this.sloganElement.replace(/animate-fadeIn1\/2s/g, '') +
            `<li class="${className}"><img src="images/slogan_index${this.appendIndex}.svg" /></li>`;
          this.appendIndex++;
        }
      }, 400);
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen);
  }
}
</script>
