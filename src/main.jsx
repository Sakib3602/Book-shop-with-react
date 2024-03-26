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
import Error from './components/Error';
import List from './components/List';
import ChartPage from './components/ChartPage';
import Story from './components/Story';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    errorElement : <Error></Error>,
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
      {
        path : "/listedbook",
        element : <List></List>
      },
      {
        path : "/chartPage",
        element : <ChartPage></ChartPage>,
      },
      {
        path : "/story",
        element : <Story></Story>,
        loader : ()=> fetch("story.json")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
