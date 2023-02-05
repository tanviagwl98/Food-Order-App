import { Header } from "../Header.js";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { Provider } from "react-redux";

test("logo is visible on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
//   console.log(header);
    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummyLogo.png")
});


test("Check online status on rendering header", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  //   console.log(header);
      const onlineStatus = header.getByTestId("online-status");
      expect(onlineStatus.innerHTML).toBe("✅")
  });

  test("Cart should have 0 elements on rendering header", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  //   console.log(header);
      const cart = header.getByTestId("cart");
      expect(cart.innerHTML).toBe("Cart - 0")
  });