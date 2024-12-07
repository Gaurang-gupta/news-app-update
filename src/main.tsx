import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page from './components/Page/Page.js';
import ErrorPage from './components/ErrorPage/ErrorPage.js';
import ReadMore from './components/ReadMore/ReadMore.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Page/></App>,
    errorElement: <App><ErrorPage/></App>
  },
  {
    path: "/news",
    element: 
    <App><Page/></App>,
    errorElement: <App><ErrorPage/></App>
  },
  {
    path: "/read_more",
    element: <App><ReadMore/></App>,
    errorElement: <App><ErrorPage/></App>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
