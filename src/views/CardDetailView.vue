<template>
  <v-container class="picture" fluid style="height: 100%;">
    <v-card>
      <v-row>
        <v-col>

        </v-col>
        <v-col>
          <v-col>
            Name: {{ this.card.name }}
          </v-col>
          <v-col>
            Description: {{ this.card.description }}
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


      <v-btn @click="goBack">back</v-btn>

    </v-card>

  </v-container>
</template>

<script>
import router from "../router";
import DataService from "../service/DataService";

export default {
  name: "CardDetailView",
  data() {
    return {
      id: Number,
      temp: [],
      card: {
        id:Number,
        name:String,
        description:String,
        hp:String,
        type:String,
        stage:String,
        expansion:String,
        rarity:String,
        number:String,
        illustrator:String,
        price:String
      }
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

  },

  methods: {

    goBack() {
      router.push("/buy-cards")
    }
  }
}
</script>

<style scoped>
.picture {
  background: url("../assets/poki.png") no-repeat center center fixed;
  background-size: cover;
  position: static;
  overflow-x: hidden;
}
</style>