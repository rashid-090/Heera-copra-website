
import './App.css'
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";


import {Header, Footer, Loading} from './components';

const Home = lazy(() => import("./pages/Home"));

const Layout = () => {
  return(
    <div className="app 2xl:max-w-[2500px] mx-auto">
       <ToastContainer position='bottom-right' theme='dark'/>
      <Header/>
      <ScrollToTop />
      <Outlet />
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading/>}>
            not found
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading/>}>
            <Home/>
          </Suspense>
        ),
      },
      
    ],
  },
]);   


function App() {


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App