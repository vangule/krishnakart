import React from 'react'
import { MainHeader } from './styles';
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
          <img src="./images/kk1.png" id="desktop" alt="my logo" width={250} height={80} />
      </NavLink>
      
      <Nav />
    </MainHeader>
  )
}

export default Header