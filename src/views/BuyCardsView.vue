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
export default {
  name: "BuyCardView",
  data: () => ({}),
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
