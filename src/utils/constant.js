export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&resultsPerPage=20&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`

export const YOUTUBE_API_BY_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`

export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query`