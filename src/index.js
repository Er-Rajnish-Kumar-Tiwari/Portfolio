import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Projects from './Projects.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const allroutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'/Services',
      element:<Services/>
    },
    {
      path:'/Skills',
      element:<Skills/>
    },
    {
      path:'/Education',
      element:<Education/>
    },
    {
      path:'/Projects',
      element:<Projects/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes}/>
  </React.StrictMode>
);

reportWebVitals();
