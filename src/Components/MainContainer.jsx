import { useEffect } from "react"
import ButtonList from "./ButtonList"
import VideoContent from "./VideoContent"
import { useDispatch } from "react-redux"
import { toggleMiniSideBarMenu } from "../utils/MenuSlice"

const MainContainer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(toggleMiniSideBarMenu())
  })

  return (
    <div className="p-4 bg-black text-white w-full flex flex-col h-full">
      <ButtonList />
      <VideoContent />
    </div>
  )
}

export default MainContainer