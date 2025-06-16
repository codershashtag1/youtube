import { createBrowserRouter, RouterProvider } from "react-router"
import Body from "./Components/Body"
import Header from "./Components/Header"
import MainContainer from "./Components/MainContainer"
import appStore from "./utils/appStore"
import { Provider } from "react-redux"

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
        element: <h1>Watch</h1>
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
