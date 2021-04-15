import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { selectItems } from "../store/checkoutSlice";
import { selectUser, login, logout } from "../store/userSlice";
import { auth } from "../firebase/firebase";

function Header() {
  const bucketItems = useSelector(selectItems);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);

  const loginToggle = () => {
    if (user) {
      auth.signOut();
    } else {
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazonLogo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__navOption" onClick={loginToggle}>
            <span className="header__navOption__lineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__navOption__lineTwo">
              {user ? "Log out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__navOption">
          <span className="header__navOption__lineOne">Returns</span>
          <span className="header__navOption__lineTwo">& Orders</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOption__lineOne">Your</span>
          <span className="header__navOption__lineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__basketOption">
            <ShoppingBasketIcon />
            <span className="header__navOption__lineTwo header__basketCount">
              {bucketItems.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
