<template>
  <header class="fixed flex justify-end xl:justify-center w-full top-0 left-0 text-white bg-black z-100">
    <a
      href="https://www.businesstoday.com.tw/"
      target="_blank"
      class="absolute block w-16 left-2 top-1/2 transform -translate-y-1/2"
    >
      <img src="../assets/images/businesstoday.svg" alt="今周刊">
    </a>
    <BtnetNavbar v-if="navlist" class="font-notoblack" :navList="navlist" />
  </header>
</template>

<script>
import BtnetNavbar from './nav/BtnetNavbar'

export default {
  name: 'Header',
  components: {
    BtnetNavbar
  },
  computed: {
    navlist() {
      return this.$store.state.indexData.navList;
    }
  }
}
</script>

<style>
.facebook-share,
.line-share {
  display: inline-block;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
}
.facebook-share {
  background: #4267b2;
}
.line-share {
  background: #00c200;
}
.facebook-share a,
.line-share a {
  padding: 0;
}
.facebook-share img,
.line-share img {
  width: 45px;
}
@media (min-width: 1024px) {
  .facebook-share,
  .line-share {
    display: block;
    margin: 0 0.5rem;
  }
}
</style>
