import { useState } from 'react'
import React from 'react';

import reactLogo from './assets/react.svg'
import './pages/PageInscription.css'
import { signInWithEmailAndPassword  } from 'firebase/auth'
import { auth } from './firebase'

export const PageLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const authentification = auth;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  
    return (
      <div className="container" >
        <div>
          <form onSubmit={authentification}>
            <div>
              <h2>
                Veuillez vous connecter :
              </h2>
              <br></br>
            </div>
            <div>
                <label htmlFor=''>Email </label>
                <input type='email' value={email}  onChange={e => setEmail(e.target.value)} className='from-control'></input>
            </div>
            <br></br>
            
            <div className="form__field">
            <label htmlFor=''>Mot de passe </label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='from-control'></input> 
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