import { useState } from 'react'
import { useEffect } from 'react'
import Start from './components/Start'
import blueblub from './img/blue-bulb.png'
import yellowblub from './img/yellow-bulb.png'
import './App.css'

function App() {
  const [start, setStart] = useState(false)

  return (
    <div className="app">
      <img className='bulb blue' src={blueblub} alt=""/>
      <img className='bulb yellow' src={yellowblub} alt=""/>
      <main className='app-container'>

      {!start && <Start />}

      </main>
     
    </div>
  )
}

export default App
