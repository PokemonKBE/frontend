<template>
  <v-container class="picture" fluid style="height: 100%;">
    <v-container class="justify-center">
      <v-container grid-list fill-height class="area justify-start">

        <div class="pokiCard"
             v-for="card in cards">

          <BuyElement :card-prop="card" :img="card.name"/>
        </div>

      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import DataService from "../service/DataService";
import BuyElement from "../components/BuyElement.vue";


export default {
  name: "BuyCardView",
  components: {BuyElement},
  data: () => ({
    cards: [],
  }),
  mounted() {
    this.loadCards()
  },

  methods: {
    async loadCards() {
      await DataService.getCards().then((response) => {
        this.cards = response.data
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
</style>
