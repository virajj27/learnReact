import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const API_URL = MENU_API + resId;
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    setResInfo(jsonData);
  };
  return resInfo;
};
export default useRestaurantMenu;
