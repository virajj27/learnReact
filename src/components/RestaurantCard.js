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
    <div className="rest-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <div className="res-text">
        <h3>{name}</h3>
        <h4>{cuisines && cuisines.join(", ")}</h4>
        <h4>{avgRating}🌟</h4>
        <h4>{costForTwo} FOR TWO</h4>
        <h4>{maxDeliveryTime}</h4>
      </div>
    </div>
  );
};
