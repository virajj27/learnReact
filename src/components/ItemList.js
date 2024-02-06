import React from "react";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ data }) => {
  //accordion body
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left"
          >
            <div className="py-2 flex justify-between">
              <div>
                <span>{item?.card?.info?.name}</span>
                <span>-₹ {item?.card?.info?.price / 100}</span>
                <p className="text-sm my-3">{item?.card?.info?.description}</p>
              </div>
              <div className="">
                <div className="absolute">
                  <button className=" shadow-xl text-black bg-white px-2  rounded-lg text-center">
                    add
                  </button>
                </div>
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt=""
                  className=" w-32"
                ></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
