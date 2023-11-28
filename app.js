import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./res-list";
// Header
//   -logo
//   -navbar items
// body
//   -search
//   -RestaurantContainer
//     -restaurantCard
//        -image,name,stars,cuisines,how much for two
// Footer
//   -copyright
//   -links
//   -contact Number
//   -social media links
//   -address
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x0"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestCard = (props) => {
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
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
      <div className="res-text">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo / 100}</h4>
        <h4>{maxDeliveryTime}</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="searchbar">Search</div>
      <div className="rest-container">
        {restaurantList.map((restaurant) => (
          <RestCard resData={...restaurant.data} key={...restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
