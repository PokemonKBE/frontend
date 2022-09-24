export class PokemonCardRequest {
    private id: number

    constructor(id: number) {
        this.id = id
    }

    get getId(): number {
        return this.id;
    }

    set setId(value: number) {
        this.id = value;
    }
}