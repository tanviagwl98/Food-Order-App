import {useState, useEffect} from'react';
import { FETCH_MENU_URL } from '../config';

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantMenu()
    },[])

    async function getRestaurantMenu() {
        const data = await fetch(
          FETCH_MENU_URL + resId
        );
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
      }

      return restaurant;
}

export default useRestaurantMenu;
