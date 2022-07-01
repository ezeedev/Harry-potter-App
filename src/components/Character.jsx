function Character( {character} ) {
  return (
    <div className="">
        <div>
          <h2>{character.personaje}</h2>
        </div>

        <div >
          <img src={character.imagen} alt={character.personaje}/>
          <h4>Casa: {character.casaDeHogwarts}</h4>
        </div>
  </div>
  )
}

export default Character