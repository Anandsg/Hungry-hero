import React from "react";
import ReactDOM from "react-dom/client";
import Header from  "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/error";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>
  },
  {
    path: "/About",
    element: <About/>
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering functional component
root.render(<RouterProvider router={appRouter}/>);
