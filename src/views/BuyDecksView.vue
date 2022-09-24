<template>
  <v-container class="picture" fluid style="height: 100%;">
    <v-container class="justify-center">
      <v-container grid-list fill-height class="area justify-start">
        <div class="pokiCard"
             v-for="deck in decks">

          <BuyElement :cardProp="deck" :img="imgName"/>

        </div>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import DataService from "../service/DataService";
import BuyElement from "../components/BuyElement.vue";
import {CurrencyRequest} from "../dto/CurrencyRequest";
import currency from "../state-management/currency";

export default {
  name: "BuySetView",
  components: {BuyElement},

  data: () => ({
    decks: [],
    imgName: "Ditto",
    newPrices: [],
    tempNumber: 0,
  }),

  async mounted() {
    await this.getDecks()

    let presentCurrency = currency().currentCurrency.value

    let oldPrices = this.decks.map((deck) => deck.price)

    for (let i = 0; i < oldPrices.length; i++) {
      await this.loadNewPrices(presentCurrency, oldPrices[i])
    }

    for (let i = 0; i < this.decks.length; i++) {
      this.decks[i].price = this.newPrices[i]
    }

  },

  methods: {
    async getDecks() {
      await DataService.getDecks().then((response) => {
        this.decks = response.data
        console.log(this.decks)
      })
    },

    async loadNewPrices(curr, oldPrice) {
      let currencyRequest = new CurrencyRequest(curr, oldPrice)

      await DataService.getCurrency(currencyRequest).then((response) => {
        this.tempNumber = response.data
        this.newPrices.push(this.tempNumber)
      })
    },

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
