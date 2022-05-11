import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'

export default function Navbar() {
  return (
    <NavContainer>
      <LeftSide>
        <Logo>
          <img src='./images/logo.svg' alt="logo"/>
        </Logo>
        <Links>
          <a href="#" >Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Links>
      </LeftSide>
      <RightSide>
        <CartIcon>
          <img src="./images/icon-cart.svg" alt="cart"/>
        </CartIcon>
        <Profile>
          <img src="./images/image-avatar.png" alt="profile pic"/>
        </Profile>
        <Cart/>
      </RightSide>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  border-bottom: 1px solid var(--grayish-blue);
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-bottom: 30px;
`
const LeftSide = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.div`
  margin-right: 40px;

  :hover{
    border: 2px solid var(--orange);
  }
` 
const Links = styled.div`
  display: flex;
  gap: 40px;

  a{
    color: var(--dark-grayish-blue);
    text-decoration: none;
  }
`
const RightSide = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  gap: 50px;
  position: relative;

  .mini-cart{
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    display: block;
    margin-top: 10px;
    position: absolute;
    top: 100%;
    left: 100%;
    transform: translateX(-80%);
    max-width: 360px;
    width: 100%;
    min-height: 250px;
  }
`
const CartIcon = styled.div`
`
const Profile = styled.div`
  img{
    width: 50px;
  }
`