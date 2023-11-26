import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx';
import Gallery from './Components/Gallery.jsx';
import { RouterProvider } from 'react-router-dom'
import Contact from './Components/Contact.jsx'
import Kaushala from './Components/Kaushala.jsx'
import { Switch } from '@headlessui/react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route exact path='gallery' element={<Gallery/>}/>
      <Route exact path='kaushala' element={<Kaushala/>}/>   
      <Route path='contact' element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>,
)
