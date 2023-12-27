import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

//concerned with only displaying the menu and not fetching the api calls for that
//we have useRestaurantMenu custom hook!
const RestaurantPage = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const menuItem =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <h2>MENU</h2>
      <ul>
        {menuItem.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}-{" Rs. "}
            {menuItem[0]?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantPage;
