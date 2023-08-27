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
  // console.log(restaurant?.cards[0]);

  if (restaurant === null) return <Shimmer />;

  const {name, cloudinaryImageId, area,city, avgRating,costForTwoMessage} = restaurant?.cards[0]?.card?.card?.info;
  const {itemCards} = restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; //it is changing in api REGULAR?.cards[1] ==> REGULAR?.cards[2]
  console.log(itemCards);
  return (
    <div className="menu flex">
      <div>
        <h1>Restaurant Id : {resId}</h1>
        <h2> {name} </h2>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{area}</h3>
        <h3>{city}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul data-testid="menu">
          {itemCards.map((item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}
              <button className="bg-green-300 p-1 m-2" onClick={() => {handleFoodItem(item)}} data-testid = "add-btn"> Add
              </button></li>  
              ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
