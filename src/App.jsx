import { createHashRouter, RouterProvider } from "react-router-dom"

import { Applayout } from "./AppLayout"

import "./App.css"

import { Home } from "./page/home"
import { About } from "./page/about"
import { Country } from "./page/coutry"
import { Contact } from "./page/contact"
import { Error } from "./page/errorPage"
import { DynamicPage } from "./DynamicPage"

const App = () => {
  const router = createHashRouter([{
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "country/:id",
        element: <DynamicPage />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }])
  return <RouterProvider router={router}></RouterProvider>
}

export default App