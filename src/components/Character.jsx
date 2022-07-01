function Character( {character} ) {
   
  return (
    <div className="container max-w-2xl">
        <div>
          <h2 className="mb-3 uppercase font-bold">
            {
              character.apodo
            }
          </h2>
         <div className="">
           <img
            src={character.imagen} 
            alt={character.apodo}
            className="mb-3 w-[250px] h-[300px] object-fill rounded-lg border border-white"
          />
           <h4 className="font-bold text-xl">{character.casaDeHogwarts}</h4>
         </div>

        </div>
  </div>
  )
}


export default Character