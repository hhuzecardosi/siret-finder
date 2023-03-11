import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './PageInscription.css'
function PageLogin() {
    
  
    return (
      <div className="container" >
        <div>
          <form action='' method='post'>
            <div>
              <h2>
                Veuillez vous connecter :
              </h2>
              <br></br>
            </div>
            <div>
                <label htmlFor=''>Email </label>
                <input type='email' className='from-control'></input>
            </div>
            <br></br>
            
            <div className="form__field">
            <label htmlFor=''>Mot de passe </label>
              <input type="password" className='from-control'></input> 
            </div>
            
            <br></br>
            <br></br>
            <div>
                <button className='btn btn-success btn-block'>
                  Connexion
                </button>

            </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default PageLogin