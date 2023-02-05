import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [restaurant, setRestaurant] = useState(null);
  const restaurant = useRestaurantMenu(resId);
  const dispatch = useDispatch();

  const handleFoodItem = (item) => {
    dispatch(addItem(item));
  }
  // useEffect(() => {
  //     getRestaurantMenu();
  //   },
  //   []);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu flex">
      <div>
        <h1>Restaurant Id : {resId}</h1>
        <h2> {restaurant?.name} </h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul data-testid="menu">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}
            <button className="bg-green-300 p-1 m-2" onClick={() => {handleFoodItem(item)}} data-testid = "add-btn"> Add
            </button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
