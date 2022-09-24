import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/styles'
import Keycloak from "keycloak-js";


loadFonts()

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')

/*
const initOptions = {
    realm: 'pokemon',
    clientId: 'vue',
    url: 'http://127.0.0.1:8080/',
}

export async function authenticateAgainstKeycloak(): Promise<void> {
    try {
        const keycloak = Keycloak(initOptions)
        await keycloak.init({
            onLoad: 'login-required',
        }).then((auth) => {

            if (!auth) {
                window.location.reload()
            } else {
                console.log('Authenticated')
            }

            if (keycloak.token) {
                window.localStorage.setItem('keycloakToken', keycloak.token)
            }
        })
        await router.push('/')
    } catch (e) {
        console.log("Failed To get Token From Keycloak", e)
    }

}


function instantiateVueApp() {
    createApp(App)
        .use(router)
        .use(vuetify)
        .mount('#app')
}

if (!window.localStorage.getItem('keycloakToken')) {
    authenticateAgainstKeycloak().then(() => {
        instantiateVueApp()
    })
} else {
    instantiateVueApp()
}

*/
