import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className='border border-neutral-800 rounded-2xl px-4 py-2 text-sm bg-neutral-800 text-white'>
           {name}
        </button>
    </div>
  )
}

export default Button