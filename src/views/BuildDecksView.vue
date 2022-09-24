<template>
  <v-container class="picture" fluid style="height: 100%;">
    <v-container class="justify-center">
      <v-container grid-list fill-height class="area justify-start">
        <v-btn block
               @click="buildDeck">
          Block Button
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
                        @click="toggle(); addSelected(card)"
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

export default {
  name: "BuildSets",
  components: {BuyElement},
  data: () => ({
    selection: [],
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

    },

    addSelected(card) {
      const index = this.selection.indexOf(card);
      if (index > -1) {
        this.selection.splice(index, 1);
      } else {
        this.selection.push(card)
      }

      console.log(this.selection)
    },

    buildDeck() {

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
