<template>
  <section class="games-section">
    <div class="container">
      <h1>Games</h1>
      <div class="cards-container">
        <Card v-for="game in games" :key="game.slug">
            <router-link v-bind:to="{ name: 'game', params: { slug: game.slug } }">
              <img :src="require(`@/assets/images/${game.image}.jpg`)" alt="">
              <h4>{{ game.title }}</h4>
            </router-link>
        </Card>
      </div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    name: "GamesView",
    computed: {
        games() {
            return this.$store.getters.games
        }
    },
    components: { Card }
}
</script>

<style scoped>
.games-section {
  padding: 20px 10px;
}
</style>