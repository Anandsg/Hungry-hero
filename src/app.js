import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Contact from "./components/Contact";
import RestruarantCards from "./components/RestruarantCards";
import RestruarantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Help from "./components/Help";
import Cart from "./components/Cart";
import Main from "./components/Main";
import AppLayout from "./components/AppLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { element } from "prop-types";
const Instamart = lazy(() => import("./components/Instamart"));

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <GoogleOAuthProvider
          clientId="994984866620-if48kse03d6ohijbf0hbg48rltvn77po.apps.googleusercontent.com"
          redirectUri="https://hungry-hero-ag.netlify.app"
        >
          <AppLayout />
        </GoogleOAuthProvider>
      }
      errorElement={<Error />}
    >
      <Route path="/" element={<Body />} />
      <Route path="/About" element={<About />}>
        <Route path="Profile" element={<Profile />} />
      </Route>
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Help" element={<Help />} />
      <Route path="/restaurants/:resId" element={<RestruarantMenu />} />
      <Route path="/Cart" element={<Cart />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering functional component
root.render(<RouterProvider router={appRouter} />);
