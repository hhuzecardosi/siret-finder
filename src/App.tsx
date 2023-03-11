import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PageInscription from './PageInscription'
import PageLogin from './PageLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <PageInscription/>
        </div>
        <div>
          <PageLogin/>
        </div>
    </div>
  )
}

export default App
