import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signin from "./pages/Signin"
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

function App() {

  const router= createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/> <Signin /></> 
    },
    {
      path: "/signup",
      element: <> <Navbar/> <Signup /></> 
    },{
      path: "/todos",
      element: <> <Navbar/> <Dashboard/> </> 
    }
  ])

  

  return (
    <div className="pl-12 pr-12">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
