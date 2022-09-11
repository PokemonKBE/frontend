<template>
  <v-container class="picture" fluid style="height: 100vh;">

  </v-container>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'HomeView',
})
</script>

<style lang="scss" scoped>
.picture {
  background: url("../assets/poki.png") no-repeat center center fixed;
  background-size: cover;
  position: static;
}
</style>
