import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/styles'
import Keycloak from "keycloak-js";


loadFonts()

const initOptions = {
    realm: 'pokemon',
    clientId: 'vue',
    url: 'https://127.0.0.1:8080/',
    // checkLoginIframe: false
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
        console.log("joa blöd halt ne", e)
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


