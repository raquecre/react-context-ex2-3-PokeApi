import React, { createContext, useState } from "react";
import axios from 'axios';

const urlPoke = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=151'






export const PokeContext = createContext(pokemon)

export default function PokeContextProvider({ children }) {

    const [pokemon, setPokemon] = useState()

    React.useEffect(() => {
        axios.get(urlPoke).then((response) => {

            setPokemon(response.data)

        })

    }, [])

    return (
    <PokeContext.Provider value ={{pokemon, setPokemon}}>
        { children }
    </PokeContext.Provider>
)

}
