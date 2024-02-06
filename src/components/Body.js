import RestCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantCards from "../utils/useRestaurantCards";
export default Body = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [totalRestaurants, setTotalRestaurants] = useState([]);
  const [searchText, updateSearchText] = useState("");
  const PromotedRestaurantCard = withPromotedLabel(RestCard); //higher order component
  useEffect(() => {
    fetchData();
    console.log("body useEffect called");
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const updatedArray = json?.data?.cards.slice(3);

    setFilteredData(updatedArray?.map((item) => item?.card?.card?.info));
    setTotalRestaurants(updatedArray?.map((item) => item?.card?.card?.info));
  };
  if (!useOnlineStatus()) {
    //custom hook
    return <h1>looks like you're offline! check your internet connection</h1>;
  }
  if (totalRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              updateSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2  bg-gray-400 rounded-xl"
            onClick={() => {
              const filteredList = totalRestaurants.filter((restaurant) => {
                return restaurant.avgRating > 4.3;
              });
              setFilteredData(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredData.map((restaurant) => (
          //click->url gets updated to rest/:resId->useParams catch the id->MENU_URL is concatenated with resID and API call is made to that specific restaurant
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            {restaurant.promoted ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
