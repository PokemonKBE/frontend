<template>
  <v-container class="picture" fluid style="height: 100%;">
    <v-container class="justify-center">
      <v-container grid-list fill-height class="area justify-start">
        <div class="pokiCard"
             v-for="deck in decks">

          <BuyElement :cardProp="deck" :img="imgName" :path="detailpath"/>

        </div>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import DataService from "../service/DataService";
import BuyElement from "../components/BuyElement.vue";

export default {
  name: "BuySetView",
  components: {BuyElement},

  data: () => ({
    decks: [],
    imgName: "Ditto",
    detailpath: "/deck-detail/"
  }),

  created() {
    this.getDecks()
  },

  methods: {
    async getDecks() {
      await DataService.getDecks().then((response) => {
        this.decks = response.data

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
