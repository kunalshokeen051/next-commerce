import React from 'react'
import Wrapper from '@/components/Wrapper'
import { IoMdHeartEmpty } from 'react-icons/io'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProduct from '@/components/RelatedProduct'

const ProductDetails = () => {
    return (
        <div className='w-full md:py-10'>
            <Wrapper>
                <div className="flex mx-10 flex-col lg:flex-row md:px-10 gap-[50px] mg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] overflow-hidden lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel />
                    </div>
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            subtitle
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP :&#8377; 4999.00
                            </p>

                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                <div className="border rounded-md text-center py-3 font-medium hover:bg-black/[0.2] cursor-pointer">
                                    UK 7
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:bg-black/[0.2] cursor-pointer">
                                    UK 7
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:bg-black/[0.2] cursor-pointer">
                                    UK 7
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:bg-black/[0.2] cursor-pointer">
                                    UK 7
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:bg-black/[0.2] cursor-pointer">
                                    UK 7
                                </div>
                            </div>
                            {/* SIZE END */}
                            {/* show error Start */}
                            <div className="text-rose-800 mt-1">
                                Size selection is required
                            </div>
                            {/* show error End */}
                        </div>
                        {/* Product Size Range End */}

                        {/* ADD TO CART BUTTON START */}
                        <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95  mb-3 hover:opacity-75' >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WISHLIST BUTTON START */}
                        <button className='w-full py-4 rounded-full border border-black text-lg text-rose-800 font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10' >
                            Add to Wishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WISHLIST BUTTON END */}
                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ea dignissimos, autem fugit quaerat ipsa odit quas modi iusto vel, recusandae, dicta enim. Delectus culpa necessitatibus pariatur fugiat, voluptatem impedit fugit deleniti doloribus reiciendis facere sequi cum recusandae unde magnam vel ratione maiores. Nostrum eum ullam eos, quasi quos atque.
                            </div>
                            <div className="text-md mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ea dignissimos, autem fugit quaerat ipsa odit quas modi iusto vel, recusandae, dicta enim. Delectus culpa necessitatibus pariatur fugiat, voluptatem impedit fugit deleniti doloribus reiciendis facere sequi cum recusandae unde magnam vel ratione maiores. Nostrum eum ullam eos, quasi quos atque.
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProduct/>
            </Wrapper>
        </div>
    )
}

export default ProductDetails