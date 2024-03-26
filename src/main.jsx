import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainHome from './components/MainHome';
import Home from './components/Home';
import Details from './components/Details';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
       loader : ()=>fetch("fake.json")
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader : ()=>fetch("fake.json")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
