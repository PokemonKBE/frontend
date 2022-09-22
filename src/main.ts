import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/styles'
import Keycloak from "keycloak-js";
import app from "@/App.vue";



loadFonts()

const initOptions = {
    realm: 'pokemon',
    clientId: 'vue',
    url: 'http://127.0.0.1:8080',
}



export async function authenticateAgainstKeycloak(): Promise<void> {




}



function instantiateVueApp() {
 const app = createApp(App)
    app.config.globalProperties.keycloak = new Keycloak(initOptions)

    app.component("child-component",{
        async mounted() {
            await this.keycloak.init({
                adapter: 'default',
                onLoad: 'login-required',
            }).then((auth) => {

                if (!auth) {
                    console.log("reload")
                    window.location.reload()
                } else {

                    console.log('Authenticated')
                }

                if (this.keycloak.token) {
                    console.log("token")
                    window.localStorage.setItem('keycloakToken', this.keycloak.token)
                }
            })
            await router.push('/')
        }
    })
    app.use(router).use(vuetify).mount('#app')
}

if (!window.localStorage.getItem('keycloakToken')) {
    authenticateAgainstKeycloak().then(() => {
        instantiateVueApp()
    })
} else {
    instantiateVueApp()
}


