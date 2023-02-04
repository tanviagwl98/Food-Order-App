import React, { lazy, Suspense, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Header } from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import Footer from "./src/Components/Footer";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import { Login } from "./src/Components/Login";
import Profile from "./src/Components/Profile";
import Shimmer from "./src/Components/Shimmer";
import UserContext from "./src/utils/UserContext";
import Cart from "./src/Components/Cart";
import store from "./src/utils/store";

const Instamart = lazy(() => import("./src/Components/Instamart"));
const About = lazy(() => import("./src/Components/About"));
/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

//Config Driven UI

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Tanvi Agarwal",
    email: "vini98agwl@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        {" "}
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/home/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/home/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", // parentPath/{path} => localhost:1244/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/home/contact",
        element: <Contact />,
      },
      {
        path: "/home",
        element: <Body />,
      },

      {
        path: "/home/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/home/cart",
        element: <Cart />,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
