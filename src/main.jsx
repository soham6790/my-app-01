import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './components/about/About.jsx'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/github/Github.jsx'


//Option 1: creating routes 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Route/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])


//Option 2: Creating routes
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="user/:userid" element={<User />}/>
        <Route path="github" element={<Github />}/>
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router } />
  </StrictMode>,
)
