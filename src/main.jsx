import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Post from './Components/Post.jsx';
import Comments from './Components/Comments.jsx';
import User from './Components/User.jsx';
import ShowDetails from './Components/ShowDetails.jsx';
import Error from './Components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement : <Error ></Error>,
    children:[ 
    {
      path :'/post',
      element : <Post></Post>
    },
    {
      path :'/comments',
      element : <Comments></Comments>
    },
    {
      path :'/user',
      loader :  ( ) => fetch ('https://jsonplaceholder.typicode.com/comments'),
      element : <User></User>
    },
    {
      path :'/user/:id',
      loader : ({params}) => fetch (`https://jsonplaceholder.typicode.com/comments/${params.id}`),
      element : <ShowDetails></ShowDetails>
    }
  ]}
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
