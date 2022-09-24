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
import currency from "../state-management/currency";
import {CurrencyRequest} from "../dto/CurrencyRequest";


export default {
  name: "BuyCardView",
  components: {BuyElement},
  data: () => ({
    cards: [],
    newPrices: [],
    tempNumber: 0,
  }),

  async mounted() {
    await this.loadCards()

    let presentCurrency = currency().currentCurrency.value

    let oldPrices = this.cards.map((card) => card.price)

    for (let i = 0; i < oldPrices.length; i++) {
      await this.loadNewPrices(presentCurrency, oldPrices[i])
    }

    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].price = this.newPrices[i]
    }

  },

  methods: {
    async loadCards() {
      await DataService.getCards().then((response) => {
        this.cards = response.data
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
