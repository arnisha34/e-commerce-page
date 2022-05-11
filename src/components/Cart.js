import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from './CartContext'

export default function Cart() {

  const ctx = useContext(CartContext)

  const totalPrice = ctx.cart.map(item => item.price * item.qty)

  const removeItem = (id) => {
    const deleteItem = ctx.cart.filter(item => item.id !== id)
    ctx.setCart(deleteItem);
  }

  return (
    <MiniCartContainer className="mini-cart">
      <CartTitle>Cart</CartTitle>
      <CartItems className='cart-items'>
        {!ctx.cart.length ? <div className='empty-cart'>"Your cart is empty."</div> :
        <>
        {ctx.cart.map(item => {
          return(
            <div>
              <MiniCartThumbnail>
                <img src={`./images/${ctx.current}-thumbnail.jpg`} className="left" alt='product'/>
              </MiniCartThumbnail>
              <div className='center'>
                <span>{item.name}</span>
                <span>{"$" + item.price} x {item.qty} <b>{"$" + totalPrice}</b></span>
              </div>
              <img src="./images/icon-delete.svg" className='right' alt="delete" onClick={() => removeItem(item.id)}/>
            </div>
          )
        })}
          <CheckoutBtn>Checkout</CheckoutBtn>
        </>
        }
      </CartItems>
    </MiniCartContainer>
  )
}
const MiniCartContainer = styled.div`
  height: 100%;
`
const CartTitle = styled.div`
  border-bottom: 1px solid var(--grayish-blue);
  font-weight: 700;
  padding: 20px 30px;
`
const CartItems = styled.div`
  box-sizing: border-box;
  height: calc(100% - 61px);
  padding: 0 20px;

  .empty-cart{
    color: var(--dark-grayish-blue);
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    font-weight: 700;
    height: inherit;
    padding: 15px 30px;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    margin-bottom: 10px;
  }

  .center{
    color: var(--dark-grayish-blue);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    
    span{
      margin-bottom: 10px;
    }

    b{
      color: var(--very-dark-blue);
      margin-left: 5px;
    }
  }

  .right{
    :hover{
      cursor: pointer;
    }
  }
`
const MiniCartThumbnail = styled.div`
  img{
    border-radius: 5px;
    width: 50px;
    height: 50px;
  }
`

const CheckoutBtn = styled.button`
  background-color: var(--orange);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 0.875em;
  font-weight: 700;
  letter-spacing: 1px;
  width: 100%;
  height: 55px;

  :hover{
    cursor: pointer;
  }
`