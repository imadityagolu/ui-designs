import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Index from './index.jsx';
import NoPageFound from './components/NoPageFound';
import Signin from './components/Signin';
import Register from './components/Register';
import HealthcareDashboard from './components/HealthcareDashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path: "/Signin",
        element: <Signin/>
      },
      {
        path: "/Register",
        element: <Register/>
      },
      {
        path: "/HealthcareDashboard",
        element: <HealthcareDashboard/>
      },
      {
        path: "*",
        element: <NoPageFound/>
      }
    ],
  }
]);

function Ruter(){
  return <RouterProvider router = {router}/>;
}

export default Ruter
