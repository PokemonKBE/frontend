<template>
  <v-card
      style="background-color: #383838; color: white"
      class="mx-auto align-content-center">

    <div class="fill">
      <img
          style=""
          :src="'src/assets/' + img + '.png'"
          cover
          class="text-white">
    </div>

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
  name: "BuyElement",
  data: () => ({
    imgPath: ""
  }),

  mounted() {
    console.log(this.$props.img)
  },

  methods: {}
}
</script>

<style scoped>
.v-card {
  width: 350px;
  height: 500px;

  border-color: #D9B521;
  border-width: 2px;
}

img {

  /*object-fit: cover;*/
  max-width: 100%;
  max-height: 100%;
}

.fill {
  display: flex;
  margin: 7px;
  justify-content: center;
  background-color: #999999;
  align-items: center;
  overflow: hidden
}

.fill img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%
}

</style>
