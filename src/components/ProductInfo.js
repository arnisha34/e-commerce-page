import { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from './CartContext'
import { ImPlus } from 'react-icons/im'
import { ImMinus } from 'react-icons/im'

export default function ProductInfo() {

  const ctx = useContext(CartContext)

  let totalDiscount = ctx.price * (ctx.discount / 100);
  let total = ctx.price - totalDiscount
  ctx.setDiscount(ctx.discount)
  ctx.setPrice(ctx.price)
  ctx.setTotal(total)

  const addQty = () => {
    ctx.setQty(ctx.qty + 1)
  }

  const subQty = () => {
    if(ctx.qty === 0){
      return 0;
    }
    ctx.setQty(ctx.qty - 1)
  }

  const addToCart = (id, qty, price, name) => {
    if(qty === 0){
      return false;
    }
    ctx.setCart([{...ctx.data, id: id, qty: qty, price: price, name: name}])
    ctx.setQty(0)
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
              <Price className="price">{"$" + ctx.total.toFixed(2)}</Price>
              <Discount className='discount'>{ctx.discount + "%"}</Discount>
            </PriceContainer>
            <OriginalPrice className='orig-price'>
              {"$" + ctx.price.toFixed(2)}
            </OriginalPrice>
            <AddItemContainer>
              <span><ImMinus size={12} onClick={subQty}/>{ctx.qty}<ImPlus size={12} onClick={addQty}/></span>
              <button className='addToCart' onClick={() => addToCart(item.id, ctx.qty, ctx.total, item.name)}><img src="./images/icon-cart-white.svg" alt="cart icon"/>Add to cart</button>
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
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
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
`
const AddItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-weight: 700;
  margin-top: 40px;

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
`
