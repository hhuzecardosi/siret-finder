import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PageInscription from './PageInscription'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <PageInscription/>
        </div>
    </div>
  )
}

export default App
