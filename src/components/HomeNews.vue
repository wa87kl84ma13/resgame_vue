<template>
    <section class="home-news-section">
        <div class="container">
            <h2>Latest News</h2>

            <div class="home-news-container">
                <div class="home-news-card" v-for="article in news" :key="article.slug">
                    <router-link :to="{ name: 'news-article', params: { slug: article.slug } }">
                        <div class="home-news-card-content-container">
                            <div class="home-news-card-image">
                                <img :src="require(`@/assets/images/${article.image}.jpg`)" alt="">
                            </div>

                            <div class="home-news-card-content">
                                <h4>{{ article.title }}</h4>
                                <p>{{ article.body.slice(0, 150) }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeNews',
    computed: {
        news() {
            return this.$store.getters.news
        }
    }
}
</script>

<style scoped>
h2 {
  font-size: 34px;
}
.home-news-section {
  padding: 0 10px 20px 10px;
}
.home-news-card-content-container {
    display: grid;
    grid-template-columns: 0.75fr 4fr;
    gap: 25px;
}
.home-news-card {
    border-bottom: 1px dotted #ccc;
    padding: 10px 0;
}
.home-news-card:hover img {
    transform: scale(1.05);
    transition: 0.3s ease;
}
.home-news-card a {
    color: #000;
}
h4 {
    color: #b51b1b;
    font-size: 18px;
    font-weight: 600;
}
p {
    font-size: 16px;
}
@media (max-width: 700px) {
h2 {
    font-size: 28px;
}
.home-news-card-content-container {
    grid-template-columns: 1fr 2.5fr;
    gap: 20px;
}
h4 {
    font-size: 14px;
    line-height: 20px;
}
p {
    display: none;
}
}
</style>