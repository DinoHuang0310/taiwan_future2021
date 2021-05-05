<template>
  <footer class="btnet-footer">
    <div class="footer-box">
      <p>
        <small>今周刊文化事業(股)公司/今周行銷(股)公司/今周出版(股)公司版權所有 本網站圖文非經本社同意不得刊載</small>
        <br>
        <small>Copyright© {{ year }} 今周刊. All rights reserved</small>
      </p>
    </div>
    <transition>
      <div class="fixed-side" v-show="showButton">
        <ul>
          <li>
            <a href="mailto:cc＠btnet.com.tw">
              <img src="../assets/images/contact-us.png" alt="聯絡我們">
            </a>
          </li>
          <li>
            <a v-scroll-to="{el: '#register'}" class="cursor-pointer">
              <img src="../assets/images/ticket.png" alt="立即購票">
            </a>
          </li>
        </ul>
        <button v-if="goTop" @click="backTop(500)" class="text-gray font-notoblack focus:outline-none">
          <div>↑</div>
          <div>Top</div>
        </button>
        <a v-if="downloadFile" href="#" @click.prevent="download">六都永續城市報告書<i class="fas fa-edit" /></a>
      </div>
    </transition>
  </footer>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    goTop: {
      type: Boolean,
      default: true
    },
    downloadFile: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      year: new Date().getFullYear(),
      showButton: false,
    }
  },
  mounted() {
    if(this.goTop) window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    backTop(duration) {
      const totalScrollDistance = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
      if (totalScrollDistance === 0) return;
      let scrollY = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
      let oldTimestamp = null;
      function setScrollTop(val) {
        window.document.documentMode ? window.scroll(0, val) : document.scrollingElement.scrollTop = val
      }
      function step(newTimestamp) {
        if(oldTimestamp !== null) {
          scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
          if(scrollY <= 0) return setScrollTop(0);
          setScrollTop(scrollY);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    },
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
      if (scrollTop > (window.innerHeight / 2)) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    download() {
      axios({
        url: this.downloadFile,
        method: 'GET',
        responseType: 'blob',
      })
      .then((response) => {
        const fileURL = window.URL.createObjectURL(new Blob([response.data]));
        let fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', '《今周刊》2020 永續城市調查統計報告書.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    }
  },
  destroyed() {
    if(this.goTop) window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
.btnet-footer {
  font-family: 'Noto Sans TC', sans-serif, 'Microsoft JhengHei', arial;
  color: white;
  background: #3C3C3C;
  text-align: center;
}
.footer-box {
  width: 90%;
  margin: 0 auto;
}
.footer-box > p {
  margin: 0;
  padding: 2em 0;
  letter-spacing: 0;
}
.footer-box > p span {
  display: inline-block;
  border: solid 1px white;
  letter-spacing: 4px;
  text-indent: 4px;
  margin-top: 2em;
  padding: 0.4em 0.8em;
}
.btnet-footer small {
  font-size: 0.9em;
}
.fixed-side {
  position: fixed;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
  z-index: 98;
}
.fixed-side ul li {
  margin-bottom: 1rem;
}
.fixed-side ul li img {
  width: 80px;
}
.btnet-footer button {
  display: block;
  padding: 0;
  margin: 0 auto;
  outline: none;
}
.btnet-footer button i {
  display: block;
  opacity: 1;
  transition: .5s;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: .5s
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: .5s
}
.v-enter-to {
  opacity: 1;
}

@media (hover: hover) {
  .btnet-footer button i:hover,
  .fixed-side a:hover {
    opacity: .7;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .btnet-footer button i:hover,
  .fixed-side a:hover {
    opacity: .7;
  }
  .fixed-side a {
    display: block;
    max-height: 10em;
  }
}

@media screen and (max-width: 768px) {
  .fixed-side a {
    font-size: 17px;
  }
}

@media screen and (max-width: 480px) {
  .fixed-side {
    top: auto;
    right: 0.5rem;
    bottom: 1rem;
    transform: translate(0, 0);
  }
  .fixed-side ul li {
    margin-bottom: 0.5rem;
  }
  .fixed-side ul li img {
    width: 50px;
  }
  .btnet-footer button {
    font-size: 20px;
  }
  .fixed-side a {
    font-size: 15px;
  }
}

</style>
