import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './PageInscription.css'
function PageInscription() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="container">
        <div>
          <form action='' method='post'>
            <div>
              <h2>
                Veuillez vous inscrire :
              </h2>
              <br></br>
            </div>
            <div>
                <label htmlFor=''>Email </label>
                <input type='email' className='from-control'></input>
            </div>
            <br></br>
            
            <div>
                <label htmlFor=''>Mot de passe </label>
                <input type='password' className='from-control'></input>
            </div>
            <br></br>
            <div>
                <label htmlFor=''>Nom </label>
                <input type='Text' className='from-control'></input>
            </div>
            <br></br>
            <div>
                <label htmlFor=''>Prénom </label>
                <input type='Text' className='from-control'></input>
            </div>
            <br></br>
            <div>
                <label htmlFor=''>Numéro de téléphone </label>
                <input type='tel' className='from-control'></input>
            </div>
            <br></br>
            <br></br>
            <div>
                <button className='btn btn-success btn-block'>
                  S'inscrire
                </button>

            </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default PageInscription