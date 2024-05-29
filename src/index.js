
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "/", element: <div> testing</div> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
