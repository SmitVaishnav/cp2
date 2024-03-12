import React from 'react'
import Header from './components/Header'
import Foreground from './components/Foreground'
import Cards from './components/Cards'


function App() {
  return (
    <>
     <Header/>
      <div className='relative bg-[#E6E6DA] w-full h-svh '>
      <Foreground/>
      </div>
      <Cards/>
     
    </>
  )
}

export default App
