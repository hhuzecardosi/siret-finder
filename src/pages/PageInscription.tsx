import {useState} from 'react'
import './PageInscription.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../services/firebase'
import React from 'react';


export const PageInscription = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = auth;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return (
    <div className="container">
      <div>
        <form action={"submit"} onSubmit={() => signUp}>
          <div>
            <h2>
              Veuillez vous inscrire :
            </h2>
            <br></br>
          </div>
          <div>
            <label htmlFor=''>Email </label>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='from-control'></input>
          </div>
          <br></br>

          <div className="form__field">
            <label htmlFor=''>Mot de passe </label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form__input"
                   pattern=".{6,}" required/>
            <span className="icon"></span>
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