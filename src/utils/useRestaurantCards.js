import { useEffect, useState } from "react";
import { API_URL } from "./constants";
const useRestaurantCards = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [totalRestaurants, setTotalRestaurants] = useState([]);
  const [updatedArray, setUpdatedArray] = useState([]);
  useEffect(() => {
    fetchData();
    console.log("body useEffect called");
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setUpdatedArray(json?.data?.cards.slice(3));

    setFilteredData(updatedArray?.map((item) => item?.card?.card?.info));
    setTotalRestaurants(updatedArray?.map((item) => item?.card?.card?.info));
  };
  return updatedArray;
};

export default useRestaurantCards;
