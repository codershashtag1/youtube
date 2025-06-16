import { Outlet } from "react-router"
import MiniSideBar from "./MiniSideBar"

const Body = () => {
  return (
    <div className="flex h-screen">
      <MiniSideBar />
      <div className="flex-1 bg-black text-white overflow-y-auto">
        <Outlet />
      </div>
    </div>
    
  )
}

export default Body