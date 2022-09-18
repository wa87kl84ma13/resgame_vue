<template>
  <div class="news-section">
    <div class="container">
        <h1>News</h1>
        <div class="cards-container">
          <Card v-for="article in news" :key="article.slug">
            <router-link :to="{ name: 'news-article', params: { slug: article.slug } }">
              <img :src="require(`@/assets/images/${article.image}.jpg`)" alt="">
              <h4>{{ article.title }}</h4>
            </router-link>
          </Card>
        </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    computed: {
        news() {
            return this.$store.getters.news;
        }
    },
    components: { Card }
}
</script>

<style scoped>
.news-section {
    padding: 20px 10px;
}
a {
  color: #000;
}
</style>