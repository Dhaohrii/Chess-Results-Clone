import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Players from './components/Players';
import Tournaments from './components/Tournaments';
import Matches from './components/Matches';
import TrnmntDetails from './components/TrnmntDetails';
const routes=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/players',
    element:<Players/>
  },
  {
    path:'/tournaments',
    element:<Tournaments/>
  },
  {
    path:'/matches/player/:id/:name',
    element:<Matches />
  },
  {
    path:'/tournament/:id/:name',
    element: <TrnmntDetails />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
