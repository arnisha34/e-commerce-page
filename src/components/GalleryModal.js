import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from './CartContext'

export default function GalleryModal() {

  const ctx = useContext(CartContext)

  const galleryClick = () => {

  }

  return (
    <GalleryModalContainer>
      <MainGalleryImage>
        <img src={`./images/${ctx.current}.jpg`} alt='product'/>
      </MainGalleryImage>
      <GalleryThumbnails>   
        <img className={`${ctx.current === "image-product-1"&&"active"}`} src='./images/image-product-1-thumbnail.jpg' alt='product thumbnail 1' onClick={() => galleryClick(ctx.setCurrent("image-product-1"))}/>
        <img className={`${ctx.current === "image-product-2"&&"active"}`} src='./images/image-product-2-thumbnail.jpg' alt='product thumbnail 2' onClick={() => galleryClick(ctx.setCurrent("image-product-2"))}/>
        <img className={`${ctx.current === "image-product-3"&&"active"}`} src='./images/image-product-3-thumbnail.jpg' alt='product thumbnail 3' onClick={() => galleryClick(ctx.setCurrent("image-product-3"))}/>
        <img className={`${ctx.current === "image-product-4"&&"active"}`} src='./images/image-product-4-thumbnail.jpg' alt='product thumbnail 4' onClick={() => galleryClick(ctx.setCurrent("image-product-4"))}/>
      </GalleryThumbnails>
    </GalleryModalContainer>
  )
}

const GalleryModalContainer = styled.div`
  width: 55%;

  @media screen and (max-width: 1024px){
    width: 100%;
  }
`

const MainGalleryImage = styled.div`
  img{
    border-radius: 20px;
    margin-bottom: 20px;
    width: 80%;

    :hover{
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1024px){
    img{
      width: 100%;
    }
  }
`

const GalleryThumbnails = styled.div`
  display: flex;
  gap: 30px;
  img{
    border: 2px solid transparent;
    border-radius: 10px;
    width: 90px;
    height: 90px;
    :hover{
      cursor: pointer;
    }
    &.active{
      border: 2px solid var(--orange);
      postion: relative;
      ::after{
        background-color: #fff;
        content: "Hello";
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 1024px){
      display: none;
  }
`