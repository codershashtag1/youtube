import Comments from "./Comments";

const VideoDetails = ({ videoDetails }) => {
    const { snippet, statistics } = videoDetails || {};
    const { viewCount, likeCount, commentCount } = statistics || {};
    const { title, channelTitle, description } = snippet || {};
    console.log(videoDetails);

  // Helper function to convert URLs in description to clickable links, each on a new line
  const renderDescriptionWithLinks = (desc) => {
    if (!desc) return null;
    // Regex to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    // Split by URLs, keep URLs in the result
    const parts = desc.split(urlRegex);
    return parts.map((part, idx) => {
      if (urlRegex.test(part)) {
        return (
          <div key={idx}>
            <a href={part} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline break-all">
              {part}
            </a>
          </div>
        );
      }
      // For non-link text, split by newlines and render each line
      return part.split('\n').map((line, i) => (
        <div key={`${idx}-${i}`}>{line}</div>
      ));
    });
  };

  return (
    <div className='py-8 w-[800px]'>
      <div>
        <p>{title}</p>
      </div>
      <div className='flex flex-row gap-8 items-center py-4'>
        <p className='text-neutral-600'>{channelTitle}</p>
        <button className='border border-neutral-800 bg-neutral-800 rounded-4xl p-2'>🔔 Subscribe</button>
        <div className='border border-neutral-800 bg-neutral-800 rounded-4xl p-2 flex items-center gap-2'>
          <button className='border-r pr-2 cursor-pointer'>👍 {likeCount}</button>
          <button className='cursor-pointer'>👎</button>
        </div>
        <div className='border border-neutral-800 bg-neutral-800 rounded-4xl px-4 py-2 flex items-center gap-2'>
          <button className='cursor-pointer'>👉 Share</button>
        </div>
      </div>
      <div className='bg-neutral-800 rounded-2xl p-4'>
        <p>{viewCount} views</p>
        <div>{renderDescriptionWithLinks(description)}</div>
      </div>
      {/* <div> */}
        <Comments count={commentCount}/>
      {/* </div> */}
    </div>
  )
}

export default VideoDetails