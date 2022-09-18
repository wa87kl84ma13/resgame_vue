<template>
  <HomeBanner />
  <HomeReviewTwoCards />
  <HomeReviewCards />
  <HomeNews />
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue'
import HomeReviewCards from '@/components/HomeReviewCards.vue'
import HomeNews from '@/components/HomeNews.vue'

export default {
    name: "HomeView",
    components: { HomeBanner, HomeReviewCards, HomeNews }
}
</script>
