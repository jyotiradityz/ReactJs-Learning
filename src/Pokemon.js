const Pokemon = (probes) => {
    const {img,name,ptype,details,number}=probes;
    const displaytitle=()=>{
      console.log(probes.name);
    }
    return (
      <section className='pokemon'>
        <img src={img}></img><br />
        <h2>{name}</h2>
        {/* <button className="disbnt" >Display Name</button> */}
        <h3>Type:{ptype}</h3>
        <h4>{details} </h4>
        <span className="number">{`#${number+1}`}</span>
      </section>
    )
}

export default Pokemon;