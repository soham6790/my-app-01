import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './components/about/About.jsx'
import Route from './route.jsx'
import Home from './components/home/home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Route/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router } />
  </StrictMode>,
)
