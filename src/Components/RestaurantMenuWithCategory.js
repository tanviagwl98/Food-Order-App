import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ResCategory from "./ResCategory";

const RestaurantMenuWithCategory = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null)
  // const [restaurant, setRestaurant] = useState(null);
  const restaurant = useRestaurantMenu(resId);
  const dispatch = useDispatch();
  const handleFoodItem = (item) => {
    dispatch(addItem(item));
  };
  // useEffect(() => {
  //     getRestaurantMenu();
  //   },
  //   []);
  // console.log(restaurant?.cards[0]);

  if (restaurant === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    restaurant?.cards[0]?.card?.card?.info;
  // const {itemCards} = restaurant?.cards[1].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; //it is changing in api REGULAR?.cards[1] ==> REGULAR?.cards[2]
  const categories =
    restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories)
  // console.log(itemCards);
  return (
    <div className="text-center">
      <h1 className="font-bold mx-auto my-10 text-2xl"> {name} </h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {categories.map((c, index) => (
        <ResCategory
          key={c?.card?.card.title}
          data={c?.card?.card}
          showItems={index===showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenuWithCategory;
