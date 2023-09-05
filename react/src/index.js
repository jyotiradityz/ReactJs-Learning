import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { pokemonlist } from './pokemonlist';
import Pokemon from './Pokemon'
const Pokelist = () => {
  const getpokemon=(id)=>{
    const pokemon=pokemonlist.find((pokemon)=>pokemon.id===id)
    console.log(pokemon);
  }
  return (
    <>
      <div className='logodiv'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png' className='logo'className='logo'></img>
      </div>
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
