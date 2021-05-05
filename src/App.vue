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
    BtnetFooter
  },
  mounted() {
    // 調用store中的actions 取得本頁資料
    this.$store.dispatch('GETINDEXDATA');
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
