import {ref} from "vue";

const currentCurrency = ref(localStorage.getItem("currency"))

export default function currency() {
    function setCurrency(currency: string) {
        currentCurrency.value = currency;
    }

    return {currentCurrency, setCurrency}
}
