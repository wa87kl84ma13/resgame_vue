<template>
    <section class="reviews-section">
        <div class="container">
            <h1>Reviews</h1>
            <div class="cards-container">
                <Card v-for="review in reviews" :key="review.slug">
                    <router-link :to="{ name: 'review', params: { slug: review.slug } }">
                        <img :src="require(`@/assets/images/${review.image}.jpg`)" :alt="review.title">
                        <h4>{{ review.title }}</h4>
                    </router-link>
                </Card>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    name: "ReviewsView",
    computed: {
        reviews() {
            return this.$store.getters.reviews;
        }
    },
    components: { Card }
}
</script>

<style scoped>
.reviews-section {
    padding: 20px 10px;
}
</style>