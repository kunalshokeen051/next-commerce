import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import CartItem from '@/components/CartItem'

const Cart = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Shopping cart
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12 py-10">
                        <div className="flex-[2]">
                            <div className="text-lg font-bold">Cart Items</div>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                        </div>
                        <div className="flex-[1]">
                            <div className="text-lg font-bold">Summary</div>
                        </div>
                    </div>

                </div>
            </Wrapper>
        </div>
    )
}

export default Cart