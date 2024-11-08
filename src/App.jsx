import { useState } from 'react'
import Nav from './component/Nav'
import { Main } from './component/Main'
import { Sidebar } from './component/Sidebar'
import './App.css'

function App() {
  return (
    <>
    <Nav />
    <div className="wrapper">
    <Main />
    </div>
    </>
  )
}

export default App
