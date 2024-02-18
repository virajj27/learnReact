import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [loginBtn, setLoginBtn] = useState("login");
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-yellow-300 shadow-lg m-1">
      <div className="w-28 p-5 m-5">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex  p-4 m-4">
          <li className="px-4">
            online status:{useOnlineStatus() ? "🧃" : "🚩"}
          </li>
          <li className="px-4 mx-4">
            <Link to="/">home </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">about </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">contact us </Link>
          </li>

          <li className="px-4 font-bold text-xl">
            <Link to="/cart">cart({cartItems.length} items) </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login");
            }}
          >
            {loginBtn}
          </button>
          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
