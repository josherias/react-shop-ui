import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../responsive";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  background-color: #fff;
  position: relative;
  @media ${device.mobile} {
    flex-direction: column;
    padding: 10px 2px;
    z-index: 99999;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media ${device.mobile} {
    flex-direction: column;
    text-align: left;
    flex: none;
    align-items: flex-start;
    width: 100%;
  }
`;

const Logo = styled.h3`
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  @media ${device.mobile} {
    margin: 0px 5px;
  }
`;

const NavItem = styled.li`
  margin-left: 40px;
  cursor: pointer;
  text-decoration: none;
  margin: 5px 15px;
`;

const NavBarLink = styled.span`
  font-size: 17px;
  white-space: nowrap;
`;

const NavItemLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Right = styled.ul`
  display: flex;
  flex: 1;
  list-style-type: none;
  padding-left: 0px;
  justify-content: flex-end;
  align-items: center;
  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
    position: absolute;
    padding: 10px 0px;
    top: 50px;
    width: 100%;
    align-items: center;
    background-color: #fff;
    transition: all 150ms ease;
    transform: translateX(${(props) => (props.toggle ? "0%" : "-1000%")});
  }
`;

const Center = styled.ul`
  display: flex;
  flex: 1;
  list-style-type: none;
  padding-left: 0px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const Toggler = styled.div`
  background-color: #f1eded;
  padding: 2px 4px;
  border-radius: 3px;
  cursor: pointer;
  display: none;

  @media ${device.mobile} {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <Left>
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          <Logo>E-store</Logo>
        </Link>
      </Left>
      <Right toggle={toggle}>
        <Center>
          <NavItem>
            <NavBarLink>
              <NavItemLink to="/">Home</NavItemLink>
            </NavBarLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/products">Products</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/categories">Categories</NavItemLink>
          </NavItem>
        </Center>

        <NavItem>
          <NavBarLink>
            <NavItemLink to="/account/login">Sign In</NavItemLink>
          </NavBarLink>
        </NavItem>
        <NavItem>
          <NavBarLink>
            <NavItemLink to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </NavItemLink>
          </NavBarLink>
        </NavItem>
      </Right>
      <Toggler onClick={() => setToggle(!toggle)}>
        <MenuOutlinedIcon></MenuOutlinedIcon>
      </Toggler>
    </Wrapper>
  );
}

export default Navbar;
