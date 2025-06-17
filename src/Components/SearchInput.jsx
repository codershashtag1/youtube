import { useRef, useState, useEffect, cache } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const SearchInput = () => {

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const cache = useSelector((store) => store.search);

  useEffect(() => {

    let timeOut = setTimeout(() => {
      if(cache[searchText]) {
        setSearchResults(cache[searchText]);
      } else {
        handleSearch()
      }

    }, 200);

    return () => {
      clearTimeout(timeOut);
    }

  },[searchText])

  const handleSearch = async () => {
    try{
      if(!searchText) return;
      const search = await fetch(YOUTUBE_SEARCH_API + searchText);
      const data = await search.json();
      setSearchResults(data[1]);
      console.log(data[1]);
      dispatch(cacheResults({
        [searchText]: data[1]
      }))

    } catch (error) {
      console.error('Search error:', error);
    }
  }

  // const searchInput = useRef(null);
  // const timeOutRef = useRef(null);

  // const handleSearch = async () => {
  //   try {
  //     console.log(searchInput.current.value);

  //     if (timeOutRef.current) {
  //       clearTimeout(timeOutRef.current);
  //     }

  //     timeOutRef.current = setTimeout(async () => {
  //       const search = await fetch(YOUTUBE_SEARCH_API + searchInput.current.value);
  //       const data = await search.json();
  //       console.log(data);
  //     }, 2000);
  //   } catch (error) {
  //     console.error('Search error:', error);
  //   }
  // }

  return (
     <div className="relative flex flex-1 justify-center">
        <input 
            type="text" 
            placeholder="Search" 
            className="rounded-l-full border-2 border-neutral-800 p-1 pl-4 placeholder-neutral-800 placeholder:font-bold text-white w-6/12 focus:border-blue-500 focus:outline-none"
            // ref={searchInput}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
        />
        <button 
          className="flex items-center justify-center border rounded-r-full pr-4 pl-4 bg-neutral-800 border-neutral-800 pointer-cursor">
            🔍
        </button>
        {showSuggestions && searchResults?.length > 0 && (
          <div className="absolute top-full left-60 bg-neutral-800 z-10 rounded-xl border border-neutral-800 p-2 w-6/12 text-white">
            <ul>
              {searchResults.map((data, index) => {
                return (
                  <li key={index} className="py-2 hover:bg-gray-800 rounded-xl">{data}</li>
                )
              })}
            </ul>
          </div>  
        )}
          
    </div>     
  )
}

export default SearchInput;
