import axios from "axios"
import type {CurrencyRequest} from "@/dto/CurrencyRequest";
import type {PokemonDeckRequest} from "@/dto/PokemonDeckRequest";

const api_base_url = "http://localhost:8082/api"

class DataService {
    async getCards() {
        return await axios.get(api_base_url + "/get-cards")
    }

    async getDecks() {
        return await axios.get(api_base_url + "/get-decks")
    }

    async getCurrency(currencyRequest: CurrencyRequest) {
        return await axios.get(api_base_url + "/get-currency", {
            params: {
                ...currencyRequest
            }
        })
    }

    async postDeck(deck: PokemonDeckRequest) {
        return await axios.post(api_base_url + "/create-deck", deck);
    }
}

export default new DataService()
