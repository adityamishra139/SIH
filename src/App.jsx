import React from 'react'
import Home from './pages/Home'
import CasePage from './pages/CasePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home></Home>}/>
      <Route path='/assistant' element = {<CasePage></CasePage>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
