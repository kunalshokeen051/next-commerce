import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import Image from 'next/image';

const CartItem = () => {
    return (
        <div className='flex py-5 border-2 gap-3 md:gap-5 border-b'>
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
               <Image
                src="/product-1.webp"
                alt="Web"
                width={120}
                height={120}
               />
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">

                    {/* product title start*/}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        Jordan Retro 6G
                    </div>

                    {/* product sub-title */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        Men &apos;s Golf shoes
                    </div>
                    {/* product price */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP: ₹ 19 695.00
                    </div>

                </div>
            </div>


        </div>
    )
}

export default CartItem