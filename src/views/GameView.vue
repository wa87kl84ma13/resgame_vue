<template>
  <section class="game-details">
    <div class="container">
        <router-link to="/games">
            <span class="back-link">&lt;&lt; Games</span>
        </router-link>
        <div v-if="game" class="game-details-container">
            <div class="game-image">
                <img v-bind:src="require(`@/assets/images/${game.image}.jpg`)" alt="">
            </div>
            <div class="game-details-content">
                <h1>{{ game.title }}</h1>
                <p><strong>Release Date:</strong> {{ game.release }}</p>
                <p><strong>Developer: </strong>{{ game.developer }}</p>
                <p><strong>Platform: </strong>{{ game.platform }}</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    computed: {
        game() {
            return this.$store.getters.game(this.$route.params.slug)
        }
    }
}
</script>

<style>
.game-details {
    padding: 20px 10px;
}
.game-details-container {
    display: grid;
    gap: 25px;
    grid-template-columns: 3fr 4fr;
    margin-top: 15px;
}
p {
    font-size: 18px;
    padding: 5px 0;
}
@media (max-width: 700px) {
.game-details-container {
    display: block;
}
}
</style>