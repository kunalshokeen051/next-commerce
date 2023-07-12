import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import Image from 'next/image';

const CartItem = () => {
    return (
        <div className='flex py-5 border-2 w-full gap-3 md:gap-5 border-b'>
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <Image
                    src="/product-1.webp"
                    alt="Web"
                    width={120}
                    height={120}
                />
            </div>
            <div className="w-full flex flex-col">
                <div className="flex px-4 flex-col md:flex-row items-center justify-between">

                    {/* product title start*/}
                    <div className="text-lg md:text-2xl flex flex-col gap-4 font-semibold text-black/[0.8]">
                       <h3> Jordan Retro 6G</h3>
                        <div className="">
                        Size:
                        <select name="size" className='outline-none' id='size'>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        </div>
                    </div>

                    {/* product sub-title */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        Men &apos;s Golf shoes
                    </div>
                    {/* product price */}
                    <div className="flex items-start flex-col">
                       <div className="text-sm font-urbanist  md:text-md font-bold line-through text-rose-400">MRP: ₹ 19,695.00</div>
                        <div className="text-sm font-urbanist  md:text-md font-bold">discount: 20%</div>
                        <div className="text-sm font-urbanist  md:text-md font-bold text-lime-600 mt-2">Effective Price: ₹16,000 </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default CartItem