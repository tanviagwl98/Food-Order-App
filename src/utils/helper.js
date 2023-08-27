export function filterData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    // console.log("filtered", data);
  
    return data;
  }

  export function fourPlusRating(restaurants){
    const data = restaurants.filter((res) => res?.info?.avgRating > 4)
    // console.log(restaurants[0]?.info?.avgRating);
    // console.log(data)
    return data;
  }