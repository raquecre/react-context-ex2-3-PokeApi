import React, { useContext, useState } from "react"
//import { PokeContext } from "../context"
import axios from "axios";

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=151"
const PokeCards = () => {
    const [pokemon, setPokemon] = useState([])


    React.useEffect(() => {
        axios.get(urlPokemon).then((response) => {
            setPokemon(response.data);
        })

    }, [])
    const resultPokemon = pokemon.results
    return (
        <div className=" border m-3">
            {resultPokemon?.map((onePokemon,i) => {
                
                return (
                    <div className="border">
                        <img className="border" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} /> 
                        <h4 className="h4"> Name: <strong>{onePokemon.name}</strong>  </h4>
                    </div>

                )

            })}
        </div>)
}






export default PokeCards