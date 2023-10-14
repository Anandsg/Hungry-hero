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
import RestruarantMenu from "./components/RestaurantMenu";
import Help from "./components/Help";
import Cart from "./components/Cart";
import AppLayout from "./components/AppLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
      <Route index element={<Body />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Help" element={<Help />} />
      <Route path="restaurants/:resId" element={<RestruarantMenu />} />
      <Route path="Cart" element={<Cart />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
