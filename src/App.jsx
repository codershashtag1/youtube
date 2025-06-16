import { createBrowserRouter, RouterProvider } from "react-router"
import Body from "./Components/Body"
import Header from "./Components/Header"
import MainContainer from "./Components/MainContainer"
import appStore from "./utils/appStore"
import { Provider } from "react-redux"
import WatchVideoContainer from "./Components/WatchVideoContainer"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchVideoContainer />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
