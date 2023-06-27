import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = () => {
    return (
        <div className='flex py-5 gap-3 md:gap-5 border-b'>
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <img src="product-1.webp" alt="cartitem.png" />
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                {/* product title */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        Jordan Retro 6G
                    </div>
                {/* product title */}
                </div>
            </div>


        </div>
    )
}

export default CartItem