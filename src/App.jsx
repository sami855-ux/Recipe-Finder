import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AppLayout from "./Ui/AppLayout"
import Favourite from "./Features/Favourite"
import Home from "./Features/Home"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
