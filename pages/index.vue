<template>
  <div class="container">
    <h1>Favorite Games</h1>

    <section v-for="game in favoriteGames" :key="game.id">
      <AppGame :game="game" />
    </section>
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

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
