import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazonLogo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOption__lineOne">Hello Guest</span>
          <span className="header__navOption__lineTwo">Sign in</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOption__lineOne">Returns</span>
          <span className="header__navOption__lineTwo">& Orders</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOption__lineOne">Your</span>
          <span className="header__navOption__lineTwo">Prime</span>
        </div>
        <div className="header__basketOption">
          <ShoppingBasketIcon />
          <span className="header__navOption__lineTwo header__basketCount">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
