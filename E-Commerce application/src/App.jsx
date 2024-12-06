import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainCode from './components/MainCode';
import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <MainCode />
      </>
    ),
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
