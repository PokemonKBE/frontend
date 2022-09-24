import axios from "axios"
import type {CurrencyRequest} from "@/requests/CurrencyRequest";

const api_base_url = "http://localhost:8082/api"

class DataService {
    async getCards() {
        let value = await axios.get(api_base_url + "/get-cards")
        console.log(value)
        return value
    }

    async getDecks() {
        let value = await axios.get(api_base_url + "/get-decks")
        console.log(value)

        return value
    }

    async getCurrency(currencyRequest: CurrencyRequest) {
        let value = await axios.get(api_base_url + "/get-currency", {
            params: {
                ...currencyRequest
            }
        })
        console.log("uuumm:" + value)

        return value
    }
}

export default new DataService()
