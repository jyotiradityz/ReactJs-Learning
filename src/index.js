import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const pokemonlist = [
  {
    img: 'https://www.xtrafondos.com/wallpapers/vertical/greninja-ash-contra-mega-charizard-4981.jpg',
    name: 'Mega Charizard-X',
    ptype: 'Fire and Dragon',
    details: 'A Verystrong Pokemon evolve by Charizard',
    id:1,
  },
  {
    img: 'https://w0.peakpx.com/wallpaper/290/941/HD-wallpaper-gardevoir-pokemon-pokemon.jpg',
    name: 'Gardevoir',
    ptype: 'Psycic',
    details: 'A Beautifull Pokemon',
    id:2,
  },
  {
    img: 'https://w.forfun.com/fetch/ec/eca95a910ac23e3fd5a8fcf0680b95a6.jpeg',
    name: 'Pickachu',
    ptype: 'Electirc',
    details: 'An mouse tail Pokemon',
    id:3,
  },
  {
    img: 'https://w0.peakpx.com/wallpaper/22/68/HD-wallpaper-mew-and-mewtwo-legendary-pokemon.jpg',
    name: 'Mewtwo',
    ptype: 'Psycic',
    details: 'A Copy from Mews Fossil',
    id:4,
  }
]
const Pokemon = (probes) => {
  const displaytitle=()=>{
    console.log(probes.name);
  }
  return (
    <section className='pokemon'>
      <img src={probes.img}></img><br />
      <h2>{probes.name}</h2>
      <button className="disbnt" onClick={displaytitle}>Display Name</button>
      <h3>Type:{probes.ptype}</h3>
      <h4>{probes.details}</h4>
    </section>
  )
}

const Pokelist = () => {
  return (
    <>
      <section className='pokelist'>
        {pokemonlist.map((pokemon)=>{
          return (
            <Pokemon  {...pokemon} keys={pokemon.id}/>
          );
        })}
      </section>
    </> 
  )
}
const handleform=(e)=>{
  console.log('hello');
  console.log(e.target)
  console.log(e.target.name)
  console.log(e.target.value)
}
const handlebtn=()=>{
  alert('Handle btn')
}
const handlesubmit=()=>{
  console.log('Form submitted')
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Pokelist />);
