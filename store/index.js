import gql from "graphql-tag";

export const state = () => ({
  favoriteGames: []
});

export const mutations = {
  updateFavoriteGames: (state, data) => {
    state.favoriteGames = data;
  }
};

export const actions = {
  async callApollo({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query GetGames {
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
      `
    });

    await commit("updateFavoriteGames", response.data.favoriteGames);
  }
};
