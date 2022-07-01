import { useEffect, useState} from 'react'
import Character from './components/Character'
import '../src/index.css'

function App() {

  const [characters, setCharacter] = useState([])
  
  const URL = "https://fedeperin-harry-potter-api.herokuapp.com/db"
  
  
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setCharacter(data.personajes);
    }

    fetchData()
  }
  , [])



  return (

    <div className="bg-slate-600">
      <div className="container py-10 text-white text-center m-auto h-ful">
        <h1 className=' font-bold text-3xl py-4'>Potter App</h1>
        <p className=' text-3xl px-4 mb-24'>
          This is a simple app that will allow you to search for a main character from Harry Potter.
        </p>
      
        <div className="flex justify-center items-center text-center flex-wrap gap-14">
          {
          characters.map(character => {
            return (

            <div key={character.id}>
                <Character 
                  character = {character}
                />
             </div>

            )
           })
          }
        </div>
      </div>
    </div>
  )
}

export default App
