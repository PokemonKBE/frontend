import type {PokemonCardRequest} from "@/dto/PokemonCardRequest";

export class PokemonDeckRequest {
    // id: number
    name: string
    pokemonCardList: PokemonCardRequest[]

    constructor(name: string, pokemonCardList: PokemonCardRequest[]) {
        // this.id = id
        this.name = name
        this.pokemonCardList = pokemonCardList
    }

    // get getId(): number {
    //     return this.id
    // }
    //
    // set setId(value: number) {
    //     this.id = value
    // }

    get getName(): string {
        return this.name
    }

    set setName(value: string) {
        this.name = value
    }

    get getPokemonCardList(): PokemonCardRequest[] {
        return this.pokemonCardList
    }

    set setPokemonCardList(value: []) {
        this.pokemonCardList = value
    }
}