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
  const [total, setTotal] = useState(250)
  const [discount, setDiscount] = useState(50)
  const [price, setPrice] = useState(250)
  const [qty, setQty] = useState(0)

  useEffect(() => {
    setData(products)
  },[cart, total])

  return (
    <CartContext.Provider value={{cart, setCart, current, setCurrent, data, discount, setDiscount, price, setPrice, total, setTotal, qty, setQty}}>
      <AppContainer className="App">
        <Navbar />
        <ProductContainer>
          <GalleryModal />
          <ProductInfo />
        </ProductContainer>
      </AppContainer>
    </CartContext.Provider>
  )
}

export default App;

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1120px;
  height: 100vh;
`

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 75px 50px;
`
