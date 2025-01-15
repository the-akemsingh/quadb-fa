import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signin from "./pages/Signin"
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react"


function App() {
    const [sidebar, setSidebar] = useState(false);
    
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar sidebar={sidebar} setSidebar={setSidebar} ></Navbar> <Signin /></>
    },
    {
      path: "/signup",
      element: <> <Navbar sidebar={sidebar} setSidebar={setSidebar} ></Navbar><Signup /></>
    }, {
      path: "/todos",
      element: <> <Navbar sidebar={sidebar} setSidebar={setSidebar} ></Navbar><Dashboard sidebar={sidebar} /> </>
    }
  ])



  return (
    <div className=" pl-12 pr-12">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
