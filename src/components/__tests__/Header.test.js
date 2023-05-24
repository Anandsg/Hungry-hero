import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if logo is loaded

  const logo = header.getAllByTestId("logo");
  // console.log(logo[0]);
  expect(logo[0].src).toBe(
    "https://www.creativefabrica.com/wp-content/uploads/2018/10/Fast-Delivery-food-logo-by-DEEMKA-STUDIO-580x406.jpg"
  );
});

test("cart item should be 0 on rendering cart", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if logo is loaded

  const cart = header.getByTestId("cart");
  // console.log(logo[0]);
  expect(cart.innerHTML).toBe("0");
});
