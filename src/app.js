import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestruarantCards from "./components/RestruarantCards";
import RestruarantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Help from "./components/Help";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Main from "./components/Main";

const Instamart = lazy(() => import("./components/Instamart"));

// out let is a place where below configuration fill in
const AppLayout = () => {
  return (
    <div className="app relative">
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      // {
      //   path: '/',
      //   element: <Main />,
      // },
      {
        path: "/",
        element: <Body />,
      }, 
      {
        path: "/About",
        element: <About />,
        children: [
          {
            path: "Profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestruarantMenu />,
      },
      // {
      //   path: "/Instamart",
      //   element: (
      //     <Suspense fallback={<Shimmer />}>
      //       <Instamart />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/Cart",
        element: <Cart />,
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering functional component
root.render(<RouterProvider router={appRouter} />);
