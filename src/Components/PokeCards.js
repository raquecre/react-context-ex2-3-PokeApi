import React, { useContext, useState } from "react"
//import { PokeContext } from "../context"
import axios from "axios";

const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
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
                    <div className="border d-flex align-items-center ">
                        <img className="border" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} /> 
                        <h5> Name: <strong>{onePokemon.name}</strong>  </h5>
                    </div>

                )

            })}
        </div>)
}






export default PokeCards