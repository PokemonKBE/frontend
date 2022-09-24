<template>
  <v-container class="picture" fluid style="height: 100%; padding-top: 100px">
    <v-card
        style="background-color: #383838; color: white"
        class="mx-auto"
    >
      <v-row>
        <v-col>
          <img
              style=""
              :src="this.path"
              cover
              class="text-white">

        </v-col>
        <v-col>

            <v-card-title>{{ this.card.name }}</v-card-title>
              <v-divider color="white"></v-divider>

          <v-col>
            {{ this.card.description }}
          </v-col>
          <v-col>
            HP: {{ this.card.hp }}
          </v-col>
          <v-col>
            Type: {{ this.card.type }}
          </v-col>
          <v-col>
            Illustrator: {{ this.card.illustrator }}
          </v-col>
          <v-col>
            Rarity: {{ this.card.rarity }}
          </v-col>
          <v-col>
            Expansion: {{ this.card.expansion }}
          </v-col>
          <v-col>
            Stage: {{ this.card.stage }}
          </v-col>
          <v-col>
            Number: {{ this.card.number }}
          </v-col>
          <v-col>
            Price: {{ this.card.price }}
          </v-col>

        </v-col>
      </v-row>

    </v-card>

  </v-container>
</template>

<script>
import router from "../router";
import DataService from "../service/DataService";
import currency from "../state-management/currency";
import {CurrencyRequest} from "../dto/CurrencyRequest";

export default {
  name: "CardDetailView",
  data() {
    return {
      pathsrc: "http://localhost:5173/src/assets/",
      path: String,
      id: Number,
      temp: [],
      card: {
        id: Number,
        name: String,
        description: String,
        hp: String,
        type: String,
        stage: String,
        expansion: String,
        rarity: String,
        number: String,
        illustrator: String,
        price: Number
      },
    }
  },
  created() {
    this.id = Number(this.$route.params.id);
  },
  async mounted() {
    await DataService.getCards().then((response) => {
      this.temp = response.data
    })
    this.card = this.temp.filter((temp) => temp.id === this.id)[0]
    this.buildPath()

    const presentCurrency = currency().currentCurrency.value
    const currencyRequest = new CurrencyRequest(presentCurrency, this.card.price)

    await DataService.getCurrency(currencyRequest).then((response) => {
      this.card.price = response.data
    })

  },

  methods: {


    buildPath(){
      this.path = this.pathsrc + this.card.name + ".png"
    },
    goBack() {
      console.log(this.card.name)
      router.push("/buy-cards")
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

.v-card {
  border-color: #D9B521;
  border-width: 2px;
  max-height: 1000px;
  max-width: 1300px;
}

img {
  margin: 10px;
  background-color: #999999;
  max-height: 100%;
  max-width: 100%;
}
</style>
