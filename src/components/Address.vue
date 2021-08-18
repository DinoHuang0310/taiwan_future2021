<template>
  <div>
    <ContentWrapper>
      <div v-if="getAddress" class="container w-11/12 m-auto text-center">
        <Title>{{ getAddress.title }}</Title>
        <p class="md:text-lg">8/18、19兩天  尊榮峰會</p>
        <p class="mb-3 md:text-lg">原價20,000 <span class="text-red">回饋讀者  免費收看</span></p>
        <p class="text-lg md:text-2xl">敬 請 期 待</p>
      </div>

      <!-- media -->
      <div v-if="getVideo" class="overflow-hidden">
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
      </div>
    </ContentWrapper>

    <!-- 贈品 -->
    <ContentWrapper :setBackground="{type: 'fixed', value: backgroundImage}">
      <div class="container w-11/12 m-auto">
        <h4 class="text-lg md:text-2xl pb-8 text-center">2021 台灣大未來 國際高峰會 線上論壇參加＆抽獎辦法</h4>
        <article class="px-1/20">
          <h5 class="text-red mb-2">【參加辦法】</h5>
          <p class="mb-2">於 8/18(三)-8/19(四)高峰會線上直播進行時，完成以下兩個步驟，即可參加抽獎，共100份超值好禮回饋：</p>
          <ol class="pl-5 mb-8">
            <li class="mb-2 list-decimal">直播進行期間，分享直播影片至個人FB，並 ＠2位朋友</li>
            <li class="mb-2 list-decimal">填寫表單問卷並回傳 <a class="text-red underline" href="https://reurl.cc/oga4zl" target="_blank">https://reurl.cc/oga4zl</a></li>
          </ol>
          <h5 class="text-red mb-2">【抽獎辦法】</h5>
          <ol class="pl-5 mb-8">
            <li class="mb-2 list-decimal">將於兩天活動結束後，以電腦抽獎系統採隨機方式抽出，於2021/8/24(二)公布於本活動網站。</li>
            <li class="mb-2 list-decimal">中獎者收到【中獎通知單】後，請務必完整填寫通知單上資料，並附上身分證正反面影本，於 2021/8/31(二)前，一律以〈掛號郵寄〉〈郵戳為憑〉至104408台北市南京東路一段96號8樓「2021台灣大未來 專案團隊收」。若超過期限或資料填寫不完整者，將視同放棄且喪失得獎資格，主辦單位不另行通知。</li>
            <li class="mb-2 list-decimal">主辦單位將於 2021/9/30(四)前寄出全部得獎獎品。</li>
            <li class="mb-2 list-decimal">每人限一次得獎，若該獎項超過新台幣1,000元(含)以上者，將依法申報得獎人所得；獎項金額為新台幣20,000元(含)以上者，得獎者須先繳交【10%機會中獎稅金】，始可領獎；外籍人士不限中獎金額，一律代扣繳20%稅款。若未繳交，視同放棄獎項。</li>
            <li class="mb-2 list-decimal">本活動獎項寄送地點僅限台灣本島，不含澎湖、金門、馬祖等附屬列島。</li>
            <li class="mb-2 list-decimal">主辦單位《今周刊》保有取消、終止、修改或暫停本活動相關內容之權利，如有未盡事宜，悉依本公司相關規定或解釋辦理，並得隨時補充公告於活動官網。</li>
          </ol>
          <h5 class="text-red">【抽獎禮物】 <span class="text-sm text-gray">（照片皆為示意）</span></h5>
        </article>
        <ul class="flex flex-wrap">
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents01.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">飛利浦 全自動義式咖啡機</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$36,900</div>
                <div class="text-lg xl:text-xl tracking-normal">共1名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents02.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">裕元花園酒店 商務客房</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$14,080</div>
                <div class="text-lg xl:text-xl tracking-normal">共20名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents03.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">六福莊－剛果藍天房</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$11,500</div>
                <div class="text-lg xl:text-xl tracking-normal">共10名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents04.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">黃金紀念美鈔</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$3,500</div>
                <div class="text-lg xl:text-xl tracking-normal">共20名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents05.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">陽明生醫一家人益生菌</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$2,150</div>
                <div class="text-lg xl:text-xl tracking-normal">共20名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents06.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">KOR water-不鏽鋼保冷保溫瓶</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$1,480</div>
                <div class="text-lg xl:text-xl tracking-normal">共19名</div>
              </figcaption>
            </figure>
          </li>
          <li class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8 text-center">
            <figure>
              <img src="../assets/images/presents/presents07.png" class="rounded-full mb-2" />
              <figcaption>
                <h5 class="mb-1">飛利浦 美式咖啡壺</h5>
                <div class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded mb-1">價值NT$1,390</div>
                <div class="text-lg xl:text-xl tracking-normal">共10名</div>
              </figcaption>
            </figure>
          </li>
        </ul>
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

import backgroundImage from '../assets/images/background.png'

export default {
  name: 'Address',
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
    getAddress() {
      return this.$store.state.indexData.address;
    },
    getVideo() {
      return this.$store.state.indexData.video;
    },
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
