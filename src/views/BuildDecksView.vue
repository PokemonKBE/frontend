<template>
  <v-container class="picture" fluid style="height: 100%;">
    <v-container class="justify-center">
      <v-container grid-list fill-height class="area justify-start">


        <v-btn
            block
            class="buildButton"
            :disabled="deckDisabled">
          Build Your Deck

          <v-dialog
              v-model="dialog"
              activator="parent"
          >

            <v-card
                style="background-color: #383838; color: white"
            >
              <v-card-text
                  style="margin-top: 10px">
                Give your awesome new deck a name. Be creative!
              </v-card-text>

              <v-text-field
                  label="Name"
                  variant="outlined"
                  style="margin: 30px"
                  :rules="[required]"
                  v-model="deckName"
                  clearable>

              </v-text-field>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="white"
                    style="background-color: #4F4F4F"
                    text
                    @click="dialog = false"
                >
                  Close
                </v-btn>

                <v-btn
                    color="white"
                    text
                    style="background-color: #C9A71E"
                    :disabled="deckName === ''"
                    @click="dialog = false; buildDeck()"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-dialog>
        </v-btn>

        <div class="pokiCard"
             v-for="card in cards">

          <v-item-group
              multiple
          >
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                  <v-item v-slot="{ isSelected, toggle }">
                    <BuyElement
                        :card-prop="card"
                        :img="card.name"
                        :color="isSelected ? 'white' : ''"
                        @click="toggle(); manageSelected(card)"
                    >
                      <v-scroll-y-transition>
                        <div
                            class="text-h3 flex-grow-1 text-center"
                        >
                          {{ isSelected ? 'Selected' : 'Click Me!' }}
                        </div>
                      </v-scroll-y-transition>
                    </BuyElement>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </div>

      </v-container>
    </v-container>
  </v-container>

</template>

<script>
import DataService from "../service/DataService";
import BuyElement from "../components/BuyElement.vue";
import {PokemonCardRequest} from "../dto/PokemonCardRequest";
import {PokemonDeckRequest} from "../dto/PokemonDeckRequest";
import {CurrencyRequest} from "../dto/CurrencyRequest";
import currency from "../state-management/currency";

export default {
  name: "BuildSets",
  components: {BuyElement},
  data: () => ({
    selection: [],
    cards: [],
    newPrices: [],
    tempNumber: 0,
    dialog: false,
    deckName: "",
    deckDisabled: true,
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


    manageSelected(card) {
      const index = this.selection.indexOf(card);
      if (index > -1) {
        this.selection.splice(index, 1);
      } else {
        this.selection.push(card)
      }

      if (this.selection.length !== 0) {
        this.deckDisabled = false
      } else {
        this.deckDisabled = true
      }
      debugger
      console.log(this.selection)
    },

    buildDeck() {
      let cardRequestList = this.selection.map(card => new PokemonCardRequest(card.id))
      let deckRequest = new PokemonDeckRequest(this.deckName, cardRequestList)

      DataService.postDeck(deckRequest)

      this.deckName = ""
    },

    required(v) {
      return !!v || 'Field is required'
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

.buildButton {
  background-color: #383838;
  border-color: #999999;
  border-width: 2px;
  color: #f2f2f2;

}

</style>
