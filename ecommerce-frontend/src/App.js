import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import './app.scss'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/products",
    element:<Products/>
  },
  {
    path:"/products/:id",
    element:<Products/>
  },
  {
    path:"/product/:id",
    element:<Product />
  },
  {
    path:"/order",
    element:<span>order</span>
  },
])
const App = () => {
  return (
    <div className='app'>
        <RouterProvider router={router} />
   </div>
  )
}

export default App