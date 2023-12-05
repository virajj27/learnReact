import RestCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
export default Body = () => {
  const [totalRestaurants, setTotalRestaurants] = useState([]);
  const [searchText, updateSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const updatedArray = json?.data?.cards.slice(3);
    setTotalRestaurants(updatedArray.map((item) => item?.card?.card?.info));
  };
  // if(totalRestaurants.length===0){
  //   return <Shimmer/>
  // }
  return totalRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              updateSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = totalRestaurants.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredData(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = totalRestaurants.filter((restaurant) => {
              return restaurant.avgRating > 4;
            });
            setTotalRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredData.length === 0
          ? totalRestaurants.map((restaurant) => (
              <RestCard resData={restaurant} key={restaurant.id} />
            ))
          : filteredData.map((restaurant) => (
              <RestCard resData={restaurant} key={restaurant.id} />
            ))}
      </div>
    </div>
  );
};
