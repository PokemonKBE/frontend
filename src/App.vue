<template>
  <v-app>
    <v-main>
      <router-view />
      <BarView />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import BarView from "@/views/BarView.vue";
import router from "@/router";
import {authenticateAgainstKeycloak} from "@/main";

export default defineComponent({
  name: 'App',
  components: {
    BarView
  },
  data() {
    return {
      //
    }
  },
  beforeCreate() {
    authenticateAgainstKeycloak()
  }

})
</script>
