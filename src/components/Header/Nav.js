import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../../context/cart_context";
import { NAVIGATION_MAPPING } from "../../constants";
import { NavContainer } from './styles';
import Popover from "../common/Popover";
import Profile from "./Profile";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [activeTab, setActiveTab] = useState('/');

  const { total_item : totalItem = 0 } = useCartContext();

  const handleNavigation = (tab) => {
    setMenuIcon(false);
    setActiveTab(tab)
  };

  return (
    <NavContainer>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          {(NAVIGATION_MAPPING || []).map((item) => {
            const { to = '', key = '', name = '' } = item || {};

            const renderNav = key ==='cart' ? 
            <>
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{totalItem ? totalItem : 0} </span>
            </> :  name;

            return(
              <li key={key}>
                  <NavLink
                    to={to}
                    className={`navbar-link ${key ==='cart' ? 'cart-trolley--link' : ''}`}
                    onClick={() => handleNavigation(to)}
                    style={{ color: activeTab === to ? 'rgb(98 84 243)' : '#000' }}
                  >
                    {renderNav}
                  </NavLink>
              </li>
            )
          })}
          <Popover popoverContent={<Profile />}>
            <img
              src="./images/user.png"
              alt="profile"
              width={38}
              height={38}
              style={{ cursor: 'pointer'}}
            />
          </Popover>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;
