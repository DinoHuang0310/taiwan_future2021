<template>
  <ContentWrapper v-if="getGuest">
    <div class="container w-11/12 m-auto text-center">
      <Title :englishTitle="getGuest.titleEN">{{ getGuest.title }}</Title>
      <p class="pb-2">*順序依議程表排列</p>
      <ul
        v-for="(list, index) in getGuest.list"
        :key="index"
        :class="list.length > 3 ? 'flex flex-wrap' : 'flex flex-wrap justify-center'"
      >
        <GuestCard
          v-for="(details, detailindex) in list"
          :key="detailindex"
          :details="details"
          :myindex="`${index}-${detailindex}`"
          class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-6 lg:p-8"
        />
      </ul>
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from '../models/ContentWrapper'
import Title from '../models/Title'
import GuestCard from "./GuestCard"

export default {
  name: 'Guest',
  components: {
    ContentWrapper,
    Title,
    GuestCard
  },
  computed: {
    getGuest() {
      return this.$store.state.indexData.guest;
    }
  }
}
</script>
