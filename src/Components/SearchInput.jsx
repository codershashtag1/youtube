import React from 'react'

const SearchInput = () => {
  return (
     <div className="relative flex flex-1 justify-center">
        <input 
            type="text" 
            placeholder="Search" 
            className="rounded-l-full border-2 border-neutral-800 p-1 pl-4 placeholder-neutral-800 placeholder:font-bold text-white w-6/12 focus:border-blue-500 focus:outline-none"
        />
        <button 
        className="flex items-center justify-center border rounded-r-full pr-4 pl-4 bg-neutral-800 border-neutral-800 pointer-cursor">
            🔍
        </button>    
    </div>     
  )
}

export default SearchInput;
