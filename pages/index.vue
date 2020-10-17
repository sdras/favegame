<template>
  <div class="container">
    <h1>Favorite Games</h1>

    <main class="game-container">
      <section v-for="game in favoriteGames" :key="game.id">
        <AppGame :game="game" />
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppGame from "@/components/AppGame.vue";

export default {
  components: {
    AppGame
  },
  computed: {
    ...mapState(["favoriteGames"])
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto 50px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.game-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  section {
    border: 1px solid #333;
    padding: 10px;
  }
}

h1 {
  margin: 100px 0 70px;
  font-size: 50px;
  background: -webkit-linear-gradient(#f3ed43, #f3ed43, #e54a27);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
