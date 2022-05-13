import { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "./components/Navbar"
import GalleryModal from "./components/GalleryModal"
import ProductInfo from "./components/ProductInfo"
import {products} from './components/Data'
import { CartContext } from "./components/CartContext"

function App() {

  const [cart, setCart] = useState([])
  const [current, setCurrent] = useState("image-product-1")
  const [data, setData] = useState([])
  const [discount, setDiscount] = useState(50)
  const [isActive, setIsActive] = useState(false)
  const [open, setOpen] = useState(false)
  const [qty, setQty] = useState(0)

  useEffect(() => {
    setData(products)
    
  },[cart, open])

  const closeMiniCart = () => {
    if(open === true){
      setOpen(false)
    }
  }

  return (
    <CartContext.Provider value={{cart, setCart, current, setCurrent, data, discount, setDiscount, isActive, setIsActive, open, setOpen, qty, setQty}}>
      <div onClick={closeMiniCart}>
      <AppContainer className={`App ${isActive === true ? "active" : null}`}>
        <Navbar />
        <ProductContainer>
          <GalleryModal />
          <ProductInfo />
        </ProductContainer>
      </AppContainer>
    </div>
    </CartContext.Provider>
  )
}

export default App;

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1120px;
  height: 100vh;

  // &.active{
  //   padding: 0;
  // }
`

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 75px 50px;

  @media screen and (max-width: 1024px){
    margin: 30px 0;
  }

  @media screen and (max-width: 576px){
    margin: 0;
  }
`
