const Pokemon = (probes) => {
    const {img,name,ptype,details,number}=probes;
    const displaytitle=()=>{
      console.log(probes.name);
    }
    return (
      <section className='pokemon'>
        <img src={img}></img><br />
        <h2 className="name">{name}</h2>
        <h3 className="type">Type:{ptype}</h3>
        <h4 className="details">{details} </h4>
        <span className="number">{`#${number+1}`}</span>
        <button className="disbnt" onClick={displaytitle} >Add to wishlist</button>
      </section>
    )
}
export default Pokemon;