import { fireEvent, render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { GoogleOAuthProvider } from "@react-oauth/google";
import * as googleOauth from "@react-oauth/google";

describe('Header', () => {
  jest.spyOn(googleOauth, "useGoogleLogin");

  test("should load logo on render", () => {
    const header = render(
      <GoogleOAuthProvider>
        <StaticRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </StaticRouter>
      </GoogleOAuthProvider>
    );


    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe(
      "https://www.creativefabrica.com/wp-content/uploads/2018/10/Fast-Delivery-food-logo-by-DEEMKA-STUDIO-580x406.jpg"
    );
  });

  test("should render cart items as 0", () => {
    // load header
    const header = render(
      <GoogleOAuthProvider >
        <StaticRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </StaticRouter>
      </GoogleOAuthProvider>
    );


    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("0");
  });

  test("should initiate login on click on login button", () => {
    const screen = render(
      <GoogleOAuthProvider >
        <StaticRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </StaticRouter>
      </GoogleOAuthProvider>
    );

    const loginButton = screen.getByRole("button", {
      name: "Login ⇦"
    });

    expect(loginButton).not.toBeNull();

    fireEvent.click(loginButton);
    expect(googleOauth.useGoogleLogin).toHaveBeenCalledTimes(1);
  });

  test("should initiate logout on click on logout button", () => {
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("accessToken");
    jest.spyOn(Storage.prototype, "removeItem");
    const screen = render(
      <GoogleOAuthProvider >
        <StaticRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </StaticRouter>
      </GoogleOAuthProvider>
    );

    const logoutButton = screen.getByRole("button", {
      name: "Logout"
    });

    expect(logoutButton).not.toBeNull();

    fireEvent.click(logoutButton);
    expect(localStorage.removeItem).toHaveBeenCalledWith("accessToken");
  });
});