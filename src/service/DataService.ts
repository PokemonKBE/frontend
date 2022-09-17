import axios from "axios"

const api_base_url = "http://localhost:8082/api"

class DataService {
    async getCards() {
        let value = axios.get(api_base_url + "/getAllCards")
        console.log(value)

        return value
    }
}

export default new DataService()