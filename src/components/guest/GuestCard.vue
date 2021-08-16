<template>
  <li>
    <figure>
      <img :src="details.image" :alt="details.name" class="rounded-full mb-2" />
      <figcaption>
        <div class="text-yellow font-black">{{ details.type }}</div>
        <h5 class="text-lg xl:text-xl tracking-normal" v-html="details.name" />
        <div class="mb-2">{{ details.position }}</div>
        <button
          v-if="details.experience || details.description"
          @click="show(`nob${$attrs.myindex}`)"
          class="bg-red text-white text-sm font-notoblack px-6 py-1 rounded outline-none focus:outline-none has-hover:hover:opacity-70"
        >More</button>
        <button
          v-else
          class="bg-ccc text-white text-sm font-notoblack px-6 py-1 rounded outline-none focus:outline-none"
        >More</button>
      </figcaption>
    </figure>

    <!-- popup box -->
    <modal
      :name="`nob${$attrs.myindex}`"
      width="90%"
      height="70%"
    >
      <div slot="top-right" class="text-white m-2 md:m-4 cursor-pointer">
        <v-icon
          name="times-circle"
          scale="3"
          @click="$modal.hide(`nob${$attrs.myindex}`)"
        />
      </div>
      <figure>
        <img
          :src="details.image"
          :alt="details.name"
          class="w-1/2 md:w-1/3 mx-auto rounded-full mb-2"
        />
        <figcaption>
          <div class="text-yellow font-black">{{ details.type }}</div>
          <h5 class="text-xl" v-html="details.name" />
          <div class="mb-4">{{ details.position }}</div>
          <!-- 經歷、學歷清單 -->
          <div v-if="details.experience" class="text-left">
            <div
              v-for="(list, index) in details.experience"
              :key="index"
            >
              <h6 class="text-lg font-black">{{ list.title }}</h6>
              <div v-if="list.subtitle">{{ list.subtitle }}</div>
              <ol v-if="list.list.length && !list.isDescription" class="pl-5 mb-4">
                <li
                  v-for="(experienceList, index) in list.list"
                  :key="index"
                  class="list-disc"
                >
                  {{ experienceList }}
                </li>
              </ol>
              <div v-if="list.list.length && list.isDescription" class="mb-4">
                <p
                  v-for="(experienceList, index) in list.list"
                  :key="index"
                  class="mb-2"
                >
                  {{ experienceList }}
                </p>
              </div>
            </div>
          </div>
          <!-- 段落描述 -->
          <div v-if="details.description" class="text-left">
            <p
              v-for="(descriptionList, index) in details.description"
              :key="index"
              class="mb-2"
            >
              {{ descriptionList }}
            </p>
          </div>
        </figcaption>
      </figure>
    </modal>
  </li>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/times-circle'

export default {
  name: 'GuestCard',
  components: {
    'v-icon': Icon
  },
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  methods: {
    show(target) {
      this.$modal.show(target);
    }
  }
}
</script>

<style>
#app .vm--overlay {
  background: rgba(0, 0, 0, .7);
}
#app .vm--modal {
  max-width: 900px;
  max-height: 900px;
  left: 0 !important;
  top: 0 !important;
  right: 0;
  bottom: 0;
  padding: 2em;
  position: absolute !important;
  margin: auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
#speakers .vm--container img {
  width: 35%;
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  #app .vm--modal {
    min-width: 800px;
    min-height: 600px;
  }
}
@media screen and (max-width: 1280px) {
  #app .vm--modal {
    max-width: 760px;
  }
}
@media screen and (max-width: 480px) {
  #app .vm--modal {
    padding: 1em;
  }
}
</style>