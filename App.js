import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { Header } from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import Footer from "./src/Components/Footer";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import { Login } from "./src/Components/Login";

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
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
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
          path: "/home/about",
          element: <About />,
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
      ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {AppRouter}/>);
