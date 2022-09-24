<template>
  <v-container class="picture" fluid style="height: 100%;">
    <v-container class="justify-center">
      <v-container grid-list fill-height class="area justify-start">
          <h1 >{{ this.deck.name }}</h1>
        <v-divider color="white"></v-divider>
        <div class="pokiCard"
             v-for="card in cards">

          <BuyElement :card-prop="card" :img="card.name" :path="detailpath"/>

        </div>

      </v-container>
    </v-container>
  </v-container>

</template>

<script>

import DataService from "../service/DataService";
import BuyElement from "../components/BuyElement.vue";

export default {
  name: "DeckDetailView",
  components: {BuyElement},
  data: () => ({
    id: Number,
    cards: [],
    deck:[],
    detailpath: "/card-detail/"
  }),
  created() {
    this.id = Number(this.$route.params.id);
  },
  mounted() {
    this.loadCards()
  },

  methods: {
    async loadCards() {
      await DataService.getDecks().then((response) => {
        this.cards = response.data.filter(deck => deck.id === this.id )[0].pokemonCardList
        this.deck = response.data.filter(deck => deck.id === this.id)[0]
      })
    }
  }
}
</script>

<style scoped>
.picture {
  background: url("../assets/DarkBackground.png") no-repeat center center fixed;
  background-size: cover;
  position: static;
  overflow-x: hidden;
}

.pokiCard {
  padding-top: 10px;
  text-align: left;
  display: inline-block;
  margin: 50px;
}

.area {
  max-height: 90%;
  margin-bottom: 100px;
}

h1 {
  color: #f2f2f2;
  text-align: center;
  background-color: #999999;
}

</style>