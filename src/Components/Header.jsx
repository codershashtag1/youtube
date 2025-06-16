import SearchInput from './SearchInput';

const Header = () => {
    return (
        <div className="bg-black flex items-center justify-between px-4 h-15">
            <div className="space-y-1 p-4">
                <div className="w-5 h-0.5 bg-white"></div>
                <div className="w-5 h-0.5 bg-white"></div>
                <div className="w-5 h-0.5 bg-white"></div>
            </div>
            <div>
                <img 
                    src="https://www.gstatic.com/youtube/img/promos/growth/5eb714eda572f2c1d306b84dcea3df998e8a9985b2d855f6e6a265881bbae530_244x112.png"
                    alt="YouTube Logo"
                    width={`100px`}
                    height={`40px`}
                />
            </div>
           <SearchInput />
           <div>
                <img 
                    alt="User Profile" 
                    src="https://yt3.ggpht.com/yti/ANjgQV-BBKb2cpOvfbBz9jfH8Yp5m1OGDOpcZXahpt42p_U=s88-c-k-c0x00ffffff-no-rj" 
                    className='rounded-full h-8 w-8'
                />
           </div>
        </div>
    )
}

export default Header;  