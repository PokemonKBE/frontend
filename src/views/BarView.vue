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
        <v-btn @click="test()" block color="#D9B521">
          Login
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
import {defineComponent, getCurrentInstance} from 'vue'
import {CurrencyRequest} from '@/dto/CurrencyRequest'
import {defineComponent, ref} from 'vue'
import DataService from '../service/DataService'
import {PokemonCardRequest} from "@/dto/PokemonCardRequest";
import {PokemonDeckRequest} from "@/dto/PokemonDeckRequest";

import App from "@/App.vue";
import {th} from "vuetify/lib/locale";
export default defineComponent({
  name: 'BarView',

  data: () => ({
   cloak: getCurrentInstance()?.appContext.config.globalProperties.keycloak,
    drawer: false,
    group: null,
    selected: 'euro',
    thing: null,

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
        value: 'us-dollar',
        // symbol: '$',
        icon: 'mdi-currency-usd'
      },
      {
        title: 'Euro',
        // symbol: '€',
        value: 'euro',
        icon: 'mdi-currency-eur'

      },
      {
        title: 'Yen',
        value: 'yen',
        // symbol: '¥',
        icon: 'mdi-currency-jpy'

      },
      {
        title: 'Peso',
        value: 'peso',
        // symbol: '₱',
        icon: 'mdi-currency-php'
      }
    ],
  }),

  methods: {
    clicked(item: any) {
      if (!item) return
      this.selected = item.value
    },

    test() {
      DataService.getCards().then((response: any) => {
        this.thing = response.data
      })
      console.log(this.thing)
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
