import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { persistor, store } from "../utils/store";
import { PersistGate } from "redux-persist/integration/react";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";

const AppLayout = () => {
  const isOnline = useOnline();
  return (
    <div className="app flex justify-between flex-col h-full">
      {isOnline ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div>
              <Header />
              <div className=" pt-[57px] md:pt-[87px]">
                <Outlet />
              </div>
            </div>
            <Footer />
          </PersistGate>
        </Provider>
      ) : (
        <Offline />
      )}
    </div>
  );
};

export default AppLayout;
