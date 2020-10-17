<template>
  <div class="container">
    {{ $data }}
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    favoriteGames: {
      query: gql`
        query MyQuery {
          favoriteGames {
            id
            image
            name
            rating
            gameUser {
              id
              name
              profileImg
            }
          }
        }
      `,
      update(data) {
        return data.favoriteGames;
      }
    }
  },
  methods: {
    remove(game) {
      this.$apollo.mutate({
        mutation: gql`
          mutation removeMovie($id: Int!) {
            delete_favoriteGames(where: { id: { _eq: $id } }) {
              affected_rows
            }
          }
        `,
        variables: {
          id: favoriteGames.id
        }
      });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
