//recommended,indian,jain etc etc
import ItemList from "./ItemList";

const RestaurantCategory = ({ cardData, showItems, displayIndex }) => {
  const handleClick = () => {
    displayIndex();
  };
  //accordion header
  return (
    <div>
      <div
        className="w-1/2 bg-gray-100 m-auto shadow-lg p-4 my-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-semibold text-lg">
            {cardData.title} ({cardData?.itemCards?.length})
          </span>
          <span>👇</span>
        </div>
        <div>{showItems && <ItemList data={cardData?.itemCards} />}</div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
