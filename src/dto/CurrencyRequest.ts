export class CurrencyRequest {
     private wantedCurrency: string
     private price: number

    constructor(currency: string, price: number) {
        this.wantedCurrency = currency
        this.price = price
    }

    get getWantedCurrency(): string {
        return this.wantedCurrency;
    }

    set setWantedCurrency(value: string) {
        this.wantedCurrency = value;
    }

    get getPrice(): number {
        return this.price;
    }

    set setPrice(value: number) {
        this.price = value;
    }
}