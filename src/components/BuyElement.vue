<template>
  <v-card
      style="background-color: #383838; color: white"
      class="mx-auto">

    <v-img
        contain
        style=""
        v-bind:src="'src/assets/' + img + '.png'"
        cover
        class="text-white"></v-img>

    <v-card-title>
      {{ cardProp.name }}
      <!--      This is a titleEOWIPDJ-->
    </v-card-title>

    <v-card-text>
      {{ cardProp.price }}
      <!--      This is a text-->
    </v-card-text>
  </v-card>

</template>


<script setup>
const props = defineProps(['cardProp', 'img'])
</script>

<script>
export default {
  name: "KackView",
  data: () => ({
  }),

  mounted() {
  },

  methods: {
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
