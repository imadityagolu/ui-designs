import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Login from './pages/Login';
import Register from './pages/Register';
import NoPage from './pages/NoPage';

const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,

  children: [
    {
      index: true,
      element: <Home/>
    },
    {
      path: "/AllProducts",
      element: <AllProducts/>
    },
    {
      path: "/Cart",
      element: <Cart/>
    },
    {
      path: "/Order",
      element: <Order/>
    },
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/Register",
      element: <Register/>
    },
    {
      path: "*",
      element: <NoPage/>
    },
  ],
}
]);

function App(){
  return <RouterProvider router = {router}/>;
}
export default App
