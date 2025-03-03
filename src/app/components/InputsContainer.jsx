import React from 'react'

export default function InputsContainer({children}) {
  return (
    <div className='lg:w-1/3 w-full p-1 mb-10 lg:mb-0 rounded-lg overflow-hidden'>
      <h1 className='title-font font-bold text-2xl lg:text-3xl mb-3'> Shift Data </h1>
      {children}
    </div>
  )
}
