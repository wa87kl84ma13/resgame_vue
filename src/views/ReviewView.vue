<template>
    <section class="review-page">
        <div class="container">
            <router-link to="/reviews">
                <span class="back-link">&lt;&lt; Reviews</span>
            </router-link>

            <h1>{{ review.title }}</h1>
            <h3>Reviewed on {{ review.platform }}</h3>
            <img v-bind:src="require(`@/assets/images/${review.image}.jpg`)" v-bind:alt="review.title">
            <p>{{ review.body }}</p>
            
            <div class="verdict" v-if="review.score">
                <h2>Verdict</h2>
                <div v-if="review.score >= 9">
                    <h3>Masterpiece. An absolute must play.</h3>
                </div>
                <div v-else-if="review.score == 8">
                    <h3>Excellent game, well worth your money.</h3>
                </div>
                <div v-else-if="review.score == 6 || review.score == 7">
                    <h3>Worth a play, pick it up on sale.</h3>
                </div>
                <div v-else>
                    <h3>Terrible game, don't waste your time.</h3>
                </div>
                <span class="review-score">{{ review.score }}</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        review() {
            return this.$store.getters.review(this.$route.params.slug)
        }
    }
}
</script>

<style scoped>
.review-page {
    padding: 20px 10px;
}
h1 {
    padding: 10px 0 0 0;
    font-weight: 700;
    color: #000;
    font-size: 48px;
}
h3 {
    font-weight: 400;
    padding-bottom: 15px;
    color: #b51b1b;
    font-style: italic;
    font-size: 16px;
}
p {
    font-weight: 400;
    font-size: 20px;
    padding: 18px;
    position: relative;
}
p:after {
    position: absolute;
    content: '';
    display: block;
    width: 70%;
    height: 1px;
    background: #888;
    left: 12.5%;
    bottom: -20px;
}
.review-image {
    position: relative;
}
.review-score {
    border: 10px solid #b51b1b;
    font-size: 80px;
    font-weight: 900;
    border-radius: 50%;
    padding: 4px 38px;
}
.verdict {
    text-align: center;
    padding: 35px 0;
}
.verdict h3 {
    padding-bottom: 25px;
    font-size: 20px;
}
h2 {
    padding: 20px 0 0 0;
    font-size: 34px;
}
@media (max-width: 700px) {
h1 {
    font-size: 26px;
    line-height: 32px;
}
p {
    font-size: 14px;
}
}
</style>