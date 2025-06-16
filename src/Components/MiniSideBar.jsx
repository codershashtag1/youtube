  import React from 'react'
  import { useSelector } from "react-redux"

  const MiniSideBar = () => {
    const miniSideBarMenuFlag = useSelector((store) => store.menu.isMiniSideBarMenuOpen);
    return (
      <div className='bg-black w-20'>
        {miniSideBarMenuFlag ? (
          <ul className='text-white text-[10px] flex items-center flex-col space-y-6'>
          <li className="hover:bg-neutral-800 rounded-2xl cursor-pointer flex flex-col items-center space-y-1 py-2 px-5">
            <span className='text-2xl'>🏠</span>
            <span>Home</span>
          </li>
          <li className="hover:bg-neutral-800 rounded-2xl cursor-pointer flex flex-col items-center space-y-1 py-2 px-5">
            <span className='text-2xl'>🪸</span>
            <span>Shorts</span>
          </li>
          <li className="hover:bg-neutral-800 rounded-2xl cursor-pointer flex flex-col items-center space-y-1 p-2">
            <span className='text-2xl'>🚇</span>
            <span>Subscriptions</span>
          </li>
          <li className="hover:bg-neutral-800 rounded-2xl cursor-pointer flex flex-col items-center space-y-1 py-2 px-5">
            <span className='text-2xl'>😊</span>
            <span>You</span>
          </li>
        </ul>
      ) : ''}
        
      </div>
    )
  }

  export default MiniSideBar