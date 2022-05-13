import { useContext, useState } from 'react'
import styled from 'styled-components'
import { CartContext } from './CartContext'
import { ImPlus } from 'react-icons/im'
import { ImMinus } from 'react-icons/im'

export default function ProductInfo() {

  const ctx = useContext(CartContext)

  const [productQty, setProductQty] = useState(0)

  let price = ctx.data.map(item => item.price)
  let subtotal = price * (50 / 100)
  let total = price - subtotal

  const addQty = () => {
    setProductQty(productQty + 1)
  }

  const subQty = () => {
    if(productQty === 0){
      return 0;
    }
    setProductQty(productQty - 1)
  }

  const changeQty = (e) => {
    ctx.setQty(e.target.value)
  }

  const addToCart = (id, qty, price, name) => {
    if(qty === 0){
      return false;
    }

    const inCart = ctx.cart.find(item => item.id === id)
    if(inCart){
      const updateCart = ctx.cart.map(item => item.id === id ? {id: id, qty: item.qty + qty, price: price, name: name} : item)
      ctx.setCart(updateCart)
    }else{
      ctx.setCart([...ctx.cart, {id: id, qty: qty, price: price, name: name}])
    }
    ctx.setOpen(!ctx.open)
    setProductQty(0)
  }

  return (
    <ProductInfoContainer>
      {ctx.data.map(item => {
        return(
          <div key={item.id}>
            <h5>{item.sub}</h5>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <PriceContainer>
              <Price className="price">{"$" + total}</Price>
              <Discount className='discount'>{50 + "%"}</Discount>
            </PriceContainer>
            <OriginalPrice className='orig-price'>
              {"$" + price}
            </OriginalPrice>
            <AddItemContainer>
              <span><ImMinus size={12} onClick={() => subQty(item, productQty)}/><input name="qty" value={productQty} className="qty-box" onChange={(e) => changeQty(e)}/><ImPlus size={12} onClick={() => addQty(item, productQty)}/></span>
              <button className='addToCart' onClick={() => addToCart(item.id, productQty, total, item.name)}><img src="./images/icon-cart-white.svg" alt="cart icon"/>Add to cart</button>
            </AddItemContainer>
          </div>
        )
      })}
    </ProductInfoContainer>
  )
}

const ProductInfoContainer = styled.div`
  width: 45%;

  h1{
    font-size: 3em;
    margin-top: 0;
    margin-bottom: 0;
  }

  h5{
    color: var(--orange);
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  p{
    color: var(--dark-grayish-blue);
    line-height: 2em;
  }

  @media screen and (max-width: 1024px){
    width: 100%;
  }

  @media screen and (max-width: 768px){
    h1{
      font-size: 2em;
    }
  }
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;

  @media screen and (max-width: 1024px){
    float: left;
  }
`
const Price = styled.div`
  font-size: 2em;
  letter-spacing: 1px;
`
const Discount = styled.div`
  background-color: var(--pale-orange);
  border-radius: 10px;
  color: var(--orange);
  padding: 5px 10px;
`
const OriginalPrice = styled.div`
  color: var(--grayish-blue);
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 10px;
  text-decoration: line-through;

  @media screen and (max-width: 1024px){
    float: right;
  }
`
const AddItemContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  font-weight: 700;
  margin-top: 40px;
  clear: both;

  span{
    background-color: var(--light-grayish-blue);
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 35%;
    svg{
      filter: brightness(0) saturate(100%) invert(57%) sepia(31%) saturate(3419%) hue-rotate(347deg) brightness(101%) contrast(102%);
      :hover{
        cursor: pointer;
      }
    }
  }

  input{
    background: transparent;
    border: none;
    font-size: 1.05em;
    font-weight: 700;
    text-align: center;
    width: 50%;

    :focus{
      outline: none;
    }
  }

  button{
    background-color: var(--orange);
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 1em;
    font-weight: 700;
    color: #fff;
    width: 65%;
    height: 55px;

    img{
      width: 18px;
    }

    :hover{
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1024px){
    padding-top: 30px;
  }

  @media screen and (max-width: 576px){
    flex-wrap: wrap;

    button,
    span{
      width: 100%;
    }
  }
`
