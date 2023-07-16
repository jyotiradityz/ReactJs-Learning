import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pokemonlist } from './pokemonlist';
import Pokemon from './Pokemon'

const Pokelist = () => {
  const getpokemon=(id)=>{
    const pokemon=pokemonlist.find((pokemon)=>pokemon.id===id)
    console.log(pokemon);
  }
  return (
    <>
      <h1>The Favourite Pokemons</h1>
      <section className='pokelist'>
        {pokemonlist.map((pokemon,index)=>{
          return (
            <Pokemon  {...pokemon} id={pokemon.id} getpokemon={getpokemon} number={index} />
            );
          })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Pokelist />);
