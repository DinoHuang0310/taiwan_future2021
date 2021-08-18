<template>
  <div id="app" class="text-gray">
    <Kvarea id="home" />
    <Header />
    <Address id="activity" />
    <About id="about" />
    <KeyIssue id="keyissue" />
    <Guest id="guest" />
    <Agenda id="agenda" />
    <Report id="report" />
    <SpecialReport id="specialreport" />
    <!-- <Register id="register" /> -->
    <Organizer />
    <BtnetFooter />

    <!-- popup box -->
    <modal
      name="alert"
      width="90%"
      height="70%"
      class="relative"
    >
      <div class="absolute top-2 right-2 lg:top-4 lg:right-2 cursor-pointer z-10">
        <v-icon
          name="times-circle"
          scale="3"
          @click="$modal.hide(`alert`)"
        />
      </div>
      <div class="relative h-full md:flex md:justify-center md:items-center overflow-auto">
        
        <article class="pt-14 md:pt-0 font-notoblack">
          <h4 class="text-lg text-red font-bold mb-1 xl:mb-2">● 國內外24位大師匯聚，獨家知識饗宴</h4>
          <h4 class="text-lg text-red font-bold mb-2 xl:mb-4">●《今周刊》跟您一起挺過去！尊榮回饋完整直播</h4>
          <p class="pb-4">《今周刊》年度最大國際盛會【台灣大未來 國際高峰會】從2018年至今，國內外領袖雲集，日圓先生 榊原英資博士、全球經濟學大師 Tyler Cowen、新興市場投資教父 Mark Mobius等，已超過2,000位各界產官學領袖參加，為台灣產業帶來前瞻洞見。</p>
          <p class="pb-4">今年，重磅邀請兩位國際大師—前IMF資深顧問、危機經濟學家 Barry Eichengreen、德國二代接班典範 Bodo Janssen總裁，以及國內22位產經領袖將匯聚一堂；為期兩天的精彩專講與對談！規劃疫後最關鍵的議題：拜登基建新政與經濟重塑、綠色金融、ESG永續潮流、企業接班轉型、國際運輸與電動車浪潮等12個關鍵議題，引領產業搶先布局。</p>
          <p class="pb-4">在疫情衝擊下，2021年台灣產業也面臨前所未有的嚴峻考驗，今年適逢《今周刊》出刊25周年，為回饋讀者、力挺台灣度過疫情危機，我們決定全程開放線上免費收看，<span class="font-black">24位國內外大師、兩天的獨家知識饗宴，原價NT$20,000的尊榮峰會，完整回饋給所有讀者，讓我們一起展望疫後經濟情勢，抓住未來新機會。</span></p>
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
// import Register from "./components/Register"
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
    // Register,
    Address,
    Organizer,
    BtnetFooter,
    'v-icon': Icon
  },
  mounted() {
    // 調用store中的actions 取得本頁資料
    this.$store.dispatch('GETINDEXDATA');
    // 顯示popup公告
    // this.$modal.show('alert');
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
