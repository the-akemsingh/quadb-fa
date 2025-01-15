import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signin from "./pages/Signin"
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react"

// import { Menu } from 'lucide-react';
// import logomark from './assets/logomark.png';
// import icon from './assets/Icon.svg';
// import search from './assets/search.svg';
// import dark from './assets/Vector.svg';
// import pfp from './assets/pfp.svg';
// import group from './assets/Group.svg';
// import Today from './assets/Today.svg';
// import imp from './assets/Imp.svg';
// import planned from './assets/planned.svg';
// import tome from './assets/tome.svg';
// import Plus from './assets/Plus.svg';
// import bar from './assets/bar.svg';
// import { useState } from 'react';

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
