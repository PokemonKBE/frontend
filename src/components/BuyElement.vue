<template>
  <v-card
      style="background-color: #383838; color: white"
      class="mx-auto">
<!--
    <v-img
        contain
        style=""
        v-bind:src="'src/assets/' + cardProp.name + '.png'"
        cover
        class="text-white"></v-img>
-->
    <v-card-title>
      {{ cardProp.name }}
      <!--      This is a titleEOWIPDJ-->
    </v-card-title>

    <v-card-text>
      {{ cardProp.price }}
      <!--      This is a text-->
    </v-card-text>
    <v-spacer></v-spacer>
    <v-btn color="#D9B521" @click="routeToCardDetail">details</v-btn>
  </v-card>

</template>


<script setup>
const props = defineProps(['cardProp', 'img'])
</script>

<script>
import router from "../router";

export default {
  name: "BuyElement",
  data: () => ({
    imgPath: ""
  }),

  mounted() {
    console.log("This is me: " + this.$props.img)
  },

  methods: {
    routeToCardDetail() {
      router.push("/card-detail/"+ this.$props.cardProp.id)

    }
  }
}
</script>

<style scoped>
.v-card {
  width: 350px;
  height: 500px;

  border-color: #D9B521;
  border-width: 2px;
}

.v-img {
  margin: 10px;
  background-color: #999999;
}

</style>
