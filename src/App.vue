<template>
  <v-app>
    <v-main>
      <BarView />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HomeView from "@/views/HomeView.vue";
import BarView from "@/views/BarView.vue";

export default defineComponent({
  name: 'App',
  components: {
    HomeView,
    BarView
  },
  data() {
    return {
      //
    }
  },
})
</script>
