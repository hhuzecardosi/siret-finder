import { useState } from 'react'
import './App.css'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'

import PageInscription from './pages/PageInscription'
import PageLogin from './pages/PageLogin'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<PageLogin />}/>
        <Route  path='/register' element={<PageInscription />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
