import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantPage = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); //API call
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (i) =>
        i?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <div>
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              cardData={category?.card?.card}
              showItems={index === showIndex ? true : false}
              displayIndex={
                () =>
                  showIndex === index ? setShowIndex(null) : setShowIndex(index) //genius! because index stat from 0 do ===index
              }
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantPage;
