import { Outlet } from "react-router"
import MiniSideBar from "./MiniSideBar"

const Body = () => {
  return (
    <div className="flex">
      <MiniSideBar />
      <Outlet />
    </div>
    
  )
}

export default Body