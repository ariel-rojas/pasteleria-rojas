import React, { useState,useEffect } from "react";

const PokeAPIExample = () => {
    const [pokemon, setPokemon] = useState({})
    const url = 'https://pokeapi.co/api/v2/pokemon/alakazam'
    useEffect(() => {
        fetch(url)
        .then( res => res.json())
        .then(res => setPokemon(res))
    }, []);
    return ( 
        <>
        <div>{pokemon.name}</div>
        <img src={pokemon.sprites.front_default} alt="" ></img>
        </>

     );
}
 
export default PokeAPIExample;