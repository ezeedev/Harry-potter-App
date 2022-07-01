import { useEffect, useState} from 'react'
import Character from './components/Character'
import './index.css'

function App() {

  const [characters, setCharacter] = useState([])
  const URL = "https://fedeperin-harry-potter-api.herokuapp.com/db"
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setCharacter(data.personajes)
    }
    fetchData()
  }
  , [])

  return (

    <div className="grid grid-cols-2">
      <h1 className='bg-black'>Potter</h1>
      <p>
        This is a simple app that will allow you to search for a Harry Potter character.
      </p>

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
  )
}

export default App
