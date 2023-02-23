import {useState} from 'react'
import {getSiretQuery, sendQuery} from "./services/siret";
import reactLogo from './assets/react.svg'
import './App.css'
import {fieldQuery, Query, RequiredFields} from "./config/environement";

function App() {
  const [count, setCount] = useState(0);
  const fields: fieldQuery[] = [{field: 'denominationUniteLegale', value: 'PAUL', period: false}];
  const requiredFields: RequiredFields = ['siren', 'siret', 'denominationUniteLegale'];
  const query: Query = {fields, requiredFields};
  const send = async (query: Query): Promise<void> => {
    const url = getSiretQuery(query);
    await sendQuery(url);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo"/>
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => send(query)}> Send Query </button>
    </div>
  )
}

export default App
