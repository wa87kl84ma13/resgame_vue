<template>
  <section class="home-reviews-section">
    <div class="container">
        <h2>Latest Reviews</h2>
        <HomeReviewTwoCards />

        <div class="home-reviews-container">
            <div class="home-review-card" v-for="review in reviews.slice(3, 7)" :key="review.slug">
              <router-link :to="{ name: 'review', params: { slug: review.slug } }">
                <img :src="require(`@/assets/images/${review.image}.jpg`)" alt="">
                <h4>{{ review.title }}</h4>
              </router-link>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import HomeReviewTwoCards from './HomeReviewTwoCards.vue'

export default {
    computed: {
        reviews() {
            return this.$store.getters.reviews
        }
    },
    components: { HomeReviewTwoCards }
}
</script>

<style scoped>
h2 {
  font-size: 34px;
}
.home-reviews-section {
  padding: 20px 10px;
}
.home-reviews-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 0 0 20px 0;
}
@media (max-width: 700px) {
.home-reviews-container {
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
h2 {
  font-size: 28px;
}
h4 {
  line-height: 20px;
}
}
</style>