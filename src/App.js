import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restraurantmenu from "./components/Restraurantmenu";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import('./components/Grocery.jsx'));

const AppLayout=()=>{

  const [userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name:"Shiv"
    };
    setUserName(data.name);
  },[]);

  return (
    <UserContext.Provider value={{loggedInUser:userName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  )
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/grocery',
        element:(<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>)
      },
      {
        path:'/restaurants/:resId',
        element:<Restraurantmenu/>
      }
    ],
    errorElement:<Error/>
  },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);