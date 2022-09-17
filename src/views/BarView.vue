<template>
  <v-sheet>
    <v-card>
      <v-app-bar app fixed color="#f6efe8">

        <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="">gOtta buy em all</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
    </v-card>

    <v-navigation-drawer
        v-model="drawer"
        color="#f6efe8">

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
        <v-btn @click="test()" block color="#AED581">
          Login
        </v-btn>
      </div>

      <template v-slot:append>
        <div class="pa-2 align-content-center">

          <v-select
              label="Currency"
              :items="currencies"
              v-model="selected"

          >
            <template v-slot:item="{ item }">
              <v-list-item
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
import {defineComponent, ref} from 'vue'
import DataService from '../service/DataService'

export default defineComponent({
  name: 'BarView',

  data: () => ({
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
      DataService.getCards().then((response) => {
        this.thing = response.data
      })
      console.log(this.thing)
    }
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
  background: #E0E0E0;
}

.nav-menu .v-list-item:hover {
  background: #DCEDC8;
}

.nav-menu .v-list-item.v-list-item--active {
  background: #DCEDC8;
}

</style>
