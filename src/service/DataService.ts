import axios from "axios"
import type {CurrencyRequest} from "@/dto/CurrencyRequest";
import type {PokemonDeckRequest} from "@/dto/PokemonDeckRequest";

const api_base_url = "http://localhost:8082/api"

class DataService {
    async getCards() {
        let value = await axios.get(api_base_url + "/get-cards")
        console.log(value)

        return value
    }

    async getDecks() {
        let value = await axios.get(api_base_url + "/get-decks",
        {
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("keycloakToken"),
            }
        })
        console.log(value)

        return value
    }

    async getCurrency(currencyRequest: CurrencyRequest) {
        let value = await axios.get(api_base_url + "/get-currency", {
            params: {
                ...currencyRequest
            }
        })
        console.log(value)

        return value
    }

    async postDeck(deck: PokemonDeckRequest) {
        return await axios.post(api_base_url + "/create-deck", deck);
    }
}

export default new DataService()
