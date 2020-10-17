<template>
  <div class="game">
    <div>
      <img :src="`/${game.image}`" width="200" />
    </div>

    <div>
      <h2>{{ game.name }}</h2>
      <p>
        <span v-for="num in game.rating" :key="num" class="star">⭑</span>
      </p>

      <div v-if="game.gameUser.length">
        <hr />

        <p><strong>Active Users</strong></p>
        <div v-for="user in game.gameUser" :key="user.id">
          <p>{{ user.name }}</p>
          <img :src="`/${user.profileImg}`" width="40" class="user" />
        </div>
      </div>
    </div>
  </div>
  <!--game-->
</template>

<script>
export default {
  props: {
    game: {
      type: [Array, Object],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.game {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 35px;
  grid-row-gap: 0px;
}

.star {
  color: yellow;
}

hr {
  border-color: #595757;
  margin: 10px;
}

.user {
  border-radius: 1000px;
  margin-top: 10px;
}
</style>
