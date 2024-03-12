import React from 'react'

function Header() {
  return (
    <div className=' bg-[#E6E6DA] h-12 flex font-semibold text-lg justify-between items-center px-5' >

      <h2>STUDENTCORNER</h2>
      <div className='flex gap-5'>
        <h4 className=' no-underline hover:underline'>ABOUT</h4>
        <h4 className=' no-underline hover:underline'>LOGIN</h4>
      </div>

    </div>
  )
}

export default Header
