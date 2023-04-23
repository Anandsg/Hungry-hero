import React from "react";
import ReactDOM from "react-dom/client";
import Header from  "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestruarantCards from "./components/RestruarantCards";
import RestruarantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* out let is a place where below configuration fill in */}
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/About",
        element: <About/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
      path: "/restaurants/:resId",
      element: <RestruarantMenu/>
      },
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering functional component
root.render(<RouterProvider router={appRouter}/>);
