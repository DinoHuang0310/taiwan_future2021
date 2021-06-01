<template>
  <div id="app" class="text-gray">
    <Kvarea id="home" />
    <Header />
    <About id="about" />
    <KeyIssue id="keyissue" />
    <Guest id="guest" />
    <Agenda id="agenda" />
    <Report id="report" />
    <SpecialReport id="specialreport" />
    <Register id="register" />
    <Address />
    <Organizer />
    <BtnetFooter />

    <!-- popup box -->
    <modal
      name="alert"
      width="90%"
      height="70%"
    >
      <div class="relative h-full flex justify-center items-center">
        <div class="absolute -top-4 -right-4 cursor-pointer">
          <v-icon
            name="times-circle"
            scale="3"
            @click="$modal.hide(`alert`)"
          />
        </div>
        <article>
          <h4 class="text-xl font-bold mb-4 xl:mb-6">【重要公告】</h4>
          <p class="pb-4">第四屆《今周刊》台灣大未來 國際高峰會</p>
          <p class="pb-4">因應疫情升溫，配合中央疫情指揮中心政策，原訂2021年6月30日（三）、7月1日（四），假遠東香格里拉國際大飯店三樓宴會廳舉辦之【第四屆 台灣大未來 國際高峰會】，將延期至8月18日（三）、19日（四）於同一地點舉行。後續最新消息，請密切留意活動官網。</p>
          <p class="py-4 text-right mr-2">《今周刊》2021/5/26</p>
        </article>
      </div>
    </modal>
  </div>
</template>

<script>
import Kvarea from './components/Kvarea'
import Header from './components/Header'
import About from './components/About'
import KeyIssue from './components/issue/KeyIssue'
import Guest from "./components/guest/Guest"
import Agenda from "./components/agenda/Agenda"
import Report from "./components/report/Report"
import SpecialReport from "./components/report/SpecialReport"
import Register from "./components/Register"
import Address from "./components/Address"
import Organizer from "./components/agencies/Organizer"
import BtnetFooter from "./components/BtnetFooter"

import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/times-circle'

export default {
  name: 'App',
  components: {
    Kvarea,
    Header,
    About,
    KeyIssue,
    Guest,
    Agenda,
    Report,
    SpecialReport,
    Register,
    Address,
    Organizer,
    BtnetFooter,
    'v-icon': Icon
  },
  mounted() {
    // 調用store中的actions 取得本頁資料
    this.$store.dispatch('GETINDEXDATA');
    // 顯示popup公告
    this.$modal.show('alert');
  }
}
</script>

<style>
html {
  font-size: 1vw;
  letter-spacing: 0.1rem;
}
@media screen and (max-width: 1900px) {
  html {
    font-size: 1.1vw;
  }
}
@media screen and (max-width: 1440px) {
  html {
    font-size: 1.3vw;
  }
}
@media screen and (max-width: 1024px) {
  html {
    font-size: 1.6vw;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 2vw;
  }
}
@media screen and (max-width: 640px) {
  html {
    font-size: 3vw;
  }
}
@media screen and (max-width: 480px) {
  html {
    font-size: 4.2vw;
  }
}
@media screen and (max-width: 320px) {
  html {
    font-size: 4.5vw;
  }
}
</style>
