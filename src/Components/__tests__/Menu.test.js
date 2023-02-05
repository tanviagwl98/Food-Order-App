import RestaurantMenu from "../RestaurantMenu";
import store from "../../utils/store";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import {MENU_DATA} from "../../mocks/menu";
import {Header} from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});
test("Add items to Cart", async () => {
  const menuList = render(
    <StaticRouter>
      <Provider store={store}>
      <Header/>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(()=>expect(menuList.getByTestId("menu")))

  const addBtn = menuList.getAllByTestId("add-btn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[2]);


  const cart = menuList.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 2")



});
