<template>
  <v-sheet>
    <v-card>
      <v-app-bar app style="background-color: #383838; color: lightyellow" fixed color="#f6efe8">

        <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="">gOtta buy em all</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
    </v-card>

    <v-navigation-drawer
        v-model="drawer"
        style="background-color: #383838">

      <v-list
          nav
          class="nav-menu "
          @click="drawer = !drawer"
      >
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="item"
            :to="item.path"
        >
          <v-list-item-title
              v-text="item.title"
          ></v-list-item-title>
        </v-list-item>
      </v-list>

      <div class="pa-2">
        <v-btn block color="#D9B521"
               @click="this.logout">
          Logout
        </v-btn>
      </div>

      <template v-slot:append>
        <div class="pa-2 align-content-center">

          <v-select
              style="color: white"
              label="Currency"
              :items="currencies"
              v-model="selected"
          >
            <template v-slot:item="{ item }">
              <v-list-item
                  style="color: white"
                  @click="clicked(item)"
              >
                <template v-slot:prepend>
                  <v-icon :icon="item.raw.icon"></v-icon>
                </template>

                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-select>
        </div>
      </template>

    </v-navigation-drawer>

  </v-sheet>
</template>

<script lang='ts'>
import {defineComponent, getCurrentInstance, ref} from 'vue'
import DataService from '../service/DataService'
import currency from "@/state-management/currency";

export default defineComponent({
  name: 'BarView',

  data: () => ({
    cloak: getCurrentInstance()?.appContext.config.globalProperties.keycloak,
    drawer: false,
    group: null,

    selected: currency().currentCurrency.value,

    items: [
      {
        title: 'Buy Cards',
        value: 'buy-cards',
        path: '/buy-cards'
      },
      {
        title: 'Buy Sets',
        value: 'buy-sets',
        path: '/buy-sets'

      },
      {
        title: 'Build a Set',
        value: 'build-sets',
        path: '/build-sets'
      },
    ],
    currencies: [
      {
        title: 'US Dollar',
        value: 'USD',
        // symbol: '$',
        icon: 'mdi-currency-usd'
      },
      {
        title: 'Euro',
        // symbol: '€',
        value: 'EUR',
        icon: 'mdi-currency-eur'

      },
      {
        title: 'Yen',
        value: 'YEN',
        // symbol: '¥',
        icon: 'mdi-currency-jpy'

      },
      {
        title: 'Peso',
        value: 'PHP',
        // symbol: '₱',
        icon: 'mdi-currency-php'
      }
    ],
  }),

  methods: {
    clicked(item: any) {
      if (!item) return
      this.selected = item.value
      currency().setCurrency(item.value)
      localStorage.setItem("currency", item.value)
      location.reload()
    },
    logout() {
      const redirectURL = {redirectUri: "http://localhost:5173/"}
      this.$store.state.cloak.logout(redirectURL)
      window.localStorage.removeItem("keycloakToken")
    },
  },

  watch: {
    group() {
      this.drawer = false;
    }
  }

})
</script>

<style>
.nav-menu .v-list-item {
  background: #383838;
  color: white;

}

.nav-menu .v-list-item:hover {
  background: #DAC06F;
  color: black;
}

.nav-menu .v-list-item.v-list-item--active {
  background: #D9B521;
  color: black;
}

</style>
