<template>
  <div class="home-reviews-two-blocks">
    <div class="home-review-card" v-for="review in reviews.slice(1,3)" :key="review.slug">
        <router-link :to="{ name: 'review', params: { slug: review.slug } }">
            <img :src="require(`@/assets/images/${review.image}.jpg`)" alt="">
            <div class="home-two-cards-content">
                <h3>{{ review.title }}</h3>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeReviewTwoCards',
    computed: {
        reviews() {
            return this.$store.getters.reviews
        }
    },
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
.home-reviews-two-blocks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
h3 {
    font-size: 22px;
}
@media (max-width: 700px) {
.home-reviews-two-blocks {
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
h3 {
    font-size: 16px;
    line-height: 20px;
}
}
</style>