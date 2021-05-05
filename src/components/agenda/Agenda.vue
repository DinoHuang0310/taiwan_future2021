<template>
  <ContentWrapper v-if="getAgenda">
    <div class="container w-11/12 m-auto text-center">
      <Title englishTitle="AGENDA">議程</Title>
      <div class="max-w-1366 mx-auto">
        <!-- tab selector -->
        <div class="mb-2 text-left">
          <label
            v-for="(selector, index) in getAgenda"
            :key="index"
            :class="active === index ?
              'inline-block bg-red text-white px-4 py-2 mr-1 cursor-pointer' :
              'inline-block bg-red text-white px-4 py-2 mr-1 cursor-pointer opacity-50 has-hover:hover:opacity-100'"
          >
            {{ selector.tabName }}
            <input type="radio" v-model="active" :value="index" class="hidden">
          </label>
        </div>
        <!-- tab content -->
        <div
          v-for="(content, index) in getAgenda"
          :key="index"
          v-show="active === index"
        >
          <table class="w-full tracking-normal mb-6 text-left">
            <tbody>
              <tr v-for="morning in content.morning" :key="morning.index">
                <td class="p-2 lg:p-4 border-b border-gray w-px whitespace-nowrap">{{ morning.time }}</td>
                <td class="p-2 lg:p-4 border-b border-gray w-2/5" v-html="morning.event" />
                <td class="p-2 lg:p-4 border-b border-gray" v-html="morning.description" />
              </tr>
            </tbody>
            <tbody v-show="showFullTable">
              <tr v-for="afternoon in content.afternoon" :key="afternoon.index">
                <td class="p-2 lg:p-4 border-b border-gray w-px whitespace-nowrap">{{ afternoon.time }}</td>
                <td class="p-2 lg:p-4 border-b border-gray w-2/5" v-html="afternoon.event" />
                <td class="p-2 lg:p-4 border-b border-gray" v-html="afternoon.description" />
              </tr>
            </tbody>
          </table>
        </div>
        <!-- controller -->
        <div class="relative">
          <div class="inline-block cursor-pointer has-hover:hover:opacity-75" @click="showAgenda()">
            <div class="font-notoblack">More</div>
            <v-icon
              name="chevron-down"
              scale="2.5"
              :flip="showFullTable ? 'vertical' : null"
              class="-mt-1"
            />
          </div>
          <a
            href="images/agenda.pdf"
            target="_black"
            class="absolute text-red border border-red rounded-sm right-0 top-1/2 transform -translate-y-1/2 px-2 py-0.5 has-hover:hover:opacity-50"
          >
            下載手冊
            <v-icon name="file-download" scale="1.2" />
          </a>
          <!-- <button
            class="absolute text-red border border-red rounded-sm right-0 top-1/2 transform -translate-y-1/2 px-2 py-0.5 outline-none focus:outline-none"
            @click="download()"
          >
            下載手冊
            <v-icon name="file-download" scale="1.2" />
          </button> -->
        </div>
      </div>
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from '../models/ContentWrapper'
import Title from '../models/Title'

import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/chevron-down'
import 'vue-awesome/icons/file-download'

import axios from 'axios'

export default {
  name: 'Agenda',
  components: {
    ContentWrapper,
    Title,
    'v-icon': Icon
  },
  data() {
    return {
      active: 0, // 顯示中tab
      showFullTable: false // 向下展開
    }
  },
  computed: {
    getAgenda() {
      return this.$store.state.indexData.agenda;
    }
  },
  methods: {
    showAgenda() {
      this.showFullTable = !this.showFullTable;
    },
    download() {
      axios({
        url: 'images/agenda.pdf',
        method: 'GET',
        responseType: 'blob',
      })
      .then((response) => {
        const fileURL = window.URL.createObjectURL(new Blob([response.data]));
        let fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', '議程手冊.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    }
  }
}
</script>
