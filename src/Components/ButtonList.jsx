import React from 'react'
import Button from './Button'

const ButtonListArr = ["All", "News", "Krushna Abhishek", "Live", "Bharti Sign", "Music", "Dramedy", "Podcasts", "Javascript", "Indian Soap Operas", "New to you"]

const ButtonList = () => {
  return (
    <div className='flex gap-2 flex-grow flex-wrap'>
        {ButtonListArr.map((name) => {
            return <Button key={name} name={name} />
        })}
    </div>
  )
}

export default ButtonList