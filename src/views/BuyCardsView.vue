<template>
  <v-container class="picture" fluid style="height: 100%;">

    <div class="pokiCard">
      <v-card
          class="mx-auto"
          width="1200"
          height="400">

        <template v-slot:title>
          This is a title
        </template>

        <v-card-text>
          {{ otto }}:
          <router-view v-slot="{ CardDetailView }">
            <component :is="CardDetailView" id="0" />
          </router-view>
          <v-btn @click="vorwand">go</v-btn>

        </v-card-text>
      </v-card>
    </div>

    <div class="pokiCard">
      <v-card
          class="mx-auto"
          width="1200"
          height="400">

        <template v-slot:title>
          This is a title
        </template>

        <v-card-text>
          This is content
        </v-card-text>
      </v-card>
    </div>

    <div class="pokiCard">
      <v-card
          class="mx-auto"
          width="1200"
          height="400">

        <template v-slot:title>
          This is a title
        </template>

        <v-card-text>
          This is content
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>


import router from "../router";
import DataService from "../service/DataService";



export default {
  name: "BuyCardView",
  data: () => ({
    peter: [],
    otto:"",
  }),

  mounted() {
    DataService.getCards().then((response) => {
      this.peter = response.data
      this.otto = this.peter[3]
    })

  },
  methods: {
    vorwand() {

      router.push("/card-detail/"+ this.otto.id)

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

.pokiCard {
  padding-top: 10px;
}
</style>
