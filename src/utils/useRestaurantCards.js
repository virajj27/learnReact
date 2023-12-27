import { useEffect, useState } from "react";
import { API_URL } from "./constants";
const useRestaurantCards = () => {
  const [totalRestaurants, setTotalRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const updatedArray = json?.data?.cards.slice(3);
    setTotalRestaurants(updatedArray?.map((item) => item?.card?.card?.info));
  };
  return totalRestaurants;
};

export default useRestaurantCards;
