import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const ProductDetailsCarousel = () => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
      >
        <img src="/product/product-1/1.webp" alt="prod.png" />
        <img src="/product/product-1/2.webp" alt="prod.png" />
        <img src="/product/product-1/3.webp" alt="prod.png" />
        <img src="/product/product-1/4.webp" alt="prod.png" />
        <img src="/product/product-1/5.webp" alt="prod.png" />
        <img src="/product/product-1/6.webp" alt="prod.png" />
        <img src="/product/product-1/7.webp" alt="prod.png" />
       </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel