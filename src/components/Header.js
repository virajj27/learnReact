import { LOGO_URL } from "../utils/constants";
export default Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="logo" />
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
