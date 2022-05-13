import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Cart from './Cart'
import { CartContext } from './CartContext'

export default function Navbar() {

  const ctx = useContext(CartContext)

  const qty = ctx.cart.map(item => item.qty).reduce((curr,i) => curr + i, 0);

  return (
    <NavContainer>
      <LeftSide>
        <HamburgerMenu onClick={() => ctx.setIsActive(!ctx.isActive)}>
          <div></div>
        </HamburgerMenu>
        <MobileMenu className={`${ctx.isActive === true ? "active" : null}`}>
          <MobileLinks>
            <Close className='close'><img src="./images/icon-close.svg" alt="close" onClick={() => ctx.setIsActive(!ctx.isActive)}/></Close>
            <div>
              <a href="#" >Collections</a>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </MobileLinks>
        </MobileMenu>
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
        <CartIcon onClick={() => ctx.setOpen(!ctx.open)}>
          <img src="./images/icon-cart.svg" alt="cart"/>
          <span className='qty-box'>{qty}</span>
        </CartIcon>
        <Profile>
          <img src="./images/image-avatar.png" alt="profile pic"/>
        </Profile>
        {ctx.open&&<Cart/>}
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

  @media screen and (max-width: 768px){
    margin-top: 15px;
    padding-bottom: 15px;
  }

  @media screen and (max-width: 567px){
    border-bottom: none;
  }
`
const LeftSide = styled.div`
  display: flex;
  align-items: center;
`
const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 567px){
    &.active{
      background-color: rgba(0,0,0,0.6);
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 5;
    }
  }
`
const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 567px){
    display: block;

    div{
      background-color:var(--dark-grayish-blue);
      width: 20px;
      height: 4px;
      margin-right: 15px;
      position: relative;
  
      ::before{
        background-color:var(--dark-grayish-blue);
        content: "";
        width: 20px;
        height: 4px;
        position: absolute;
        top: -6px;
      }
  
      ::after{
        background-color:var(--dark-grayish-blue);
        content: "";
        width: 20px;
        height: 4px;
        position: absolute;
        bottom: -6px;
      }
  
      :hover{
        cursor: pointer;
      }
    }
  }
`
const MobileLinks = styled.div`
  display: none;

  @media screen and (max-width: 567px){
    background-color: #fff;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 65vw;
    height: 100%;
    
    div{
      display: flex;
      flex-direction: column;
      margin-top: 5%;

      a{
        color: #000;
        font-weight: 700;
        text-decoration: none;
        padding: 15px 25px;

        :hover{
          color: var(--orange);
        }
      }
    }
  }
`
const Close = styled.div`
  padding: 25px;

  img{
    text-align: left;
  }

  :hover{
    cursor: pointer;
  }
`
const Logo = styled.div`
  margin-right: 40px;

  @media screen and (max-width: 768px){
    margin-right: 20px;
  }
` 
const Links = styled.div`
  display: flex;
  gap: 40px;

  a{
    color: var(--dark-grayish-blue);
    text-decoration: none;
    position: relative;

    :hover{
      color: #000;

      ::before{
        border-bottom: 5px solid var(--orange);
        content: "";
        position: absolute;
        top: 65px;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 768px){
    gap: 20px;

    a:hover::before{
      top: 50px;
    }
  }

  @media screen and (max-width: 567px){
    display: none;
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
    width: 360px;
    min-height: 250px;
  }

  @media screen and (max-width: 768px){
    gap: 20px;

    .mini-cart{
      left: 87%;
    }
  }

  @media screen and (max-width: 567px){
    gap: 20px;

    .mini-cart{
      left: 62%;
      right: 0;
   
      width: 95vw;
    }
  }
`
const CartIcon = styled.div`
  position: relative;

  img:hover{
    filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(9%) hue-rotate(239deg) brightness(100%) contrast(100%);
  }

  .qty-box{
    background-color: var(--orange);
    border-radius: 10px;
    color: #fff;
    content: "3";
    font-size: 0.625em;
    font-weight: 700;
    position: absolute;
    top: -5px;
    left: 10px;
    padding: 0 7px;
  }
  :hover{
    cursor: pointer;
  }
`
const Profile = styled.div`
  img{
    border: 2px solid transparent;
    width: 50px;
  }

  img:hover{
    border: 2px solid var(--orange);
    border-radius: 50%;
    cursor: pointer;
  }
`