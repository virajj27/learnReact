import { CDN_URL } from "../utils/constants";
export default RestCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    maxDeliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
      <div className="res-text">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines && cuisines.join(", ")}</h4>
        <h4>{avgRating}🌟</h4>
        <h4>{costForTwo} FOR TWO</h4>
        <h4>{maxDeliveryTime}</h4>
      </div>
    </div>
  );
};
