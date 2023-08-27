//import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../Components/Shimmer";
import { Link } from "react-router-dom";
import { filterData, fourPlusRating } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// What is state
// what is React Hooks? - functions,
// What is useState

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnline();
  const { user, setUser } = useContext(UserContext);
  const [buttonClicked, setButtonClicked] = useState(false);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const handleRatingButtonClick = () => {
    if (buttonClicked) {
      setFilteredRestaurants(allRestaurants);
    } else {
      const dataFour = fourPlusRating(allRestaurants);
      setFilteredRestaurants(dataFour);
    }
    setButtonClicked(!buttonClicked);
  };


  if (!isOnline) {
    return <h1>Oooops! Check your internet connection!</h1>;
  }

  if (!allRestaurants) return null;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          data-testid="search-input"
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          data-testid="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
        <button className={`p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md`}
          onClick = {handleRatingButtonClick}
        >
          4+ Rating
        </button>
      </div>

      <div className="flex flex-wrap" data-testid="res-list">
        {allRestaurants.length === 0 ? (
          <h1>No Matching Records!!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return restaurant?.length === 0 ? (
              <h1>No matching results found!</h1>
            ) : (
              <Link
                to={"restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
