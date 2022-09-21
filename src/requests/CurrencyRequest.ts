export class CurrencyRequest {
    wantedCurrency: string
    price: number

    constructor(currency: string, price: number) {
        this.wantedCurrency = currency
        this.price = price
    }
}