<template>
  <section class="news-article-page">
    <div class="container">
      <router-link to="/news">
          <span class="back-link">&lt;&lt; News</span>
      </router-link>
        
      <h1>{{ newsArticle.title }}</h1>
      <img :src="require(`@/assets/images/${newsArticle.image}.jpg`)" alt="">
      <p>{{ newsArticle.body }}</p>
      <iframe v-if="newsArticle.video" class="video" :src="newsArticle.video" frameborder="0" allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    newsArticle() {
      return this.$store.getters.newsArticle(this.$route.params.slug)
    }
  }
}
</script>

<style scoped>
.news-article-page {
  padding: 20px 10px;
}
h1 {
    padding: 10px 0 15px 0;
    font-weight: 700;
    color: #000;
    font-size: 36px;
}
p {
    line-break: 36px;
    font-weight: 400;
    font-size: 20px;
    padding: 18px;
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