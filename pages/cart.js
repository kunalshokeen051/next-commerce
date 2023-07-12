import React,{useState} from 'react'
import Wrapper from '@/components/Wrapper'
import CartItem from '@/components/CartItem'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router';

const Cart = () => {

    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    const pageRedirect = () =>{

    }

    return isLoading
             ? <Loader/>
        : <div className='w-full md:py-2'>
        <Wrapper>
            <div className="text-center max-w-[1200px] mx-auto mt-8 md:mt-0">
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
                    <div className="flex-[1] ">
                        <div className="text-lg font-bold">Summary</div>
                        <div className="w-full border-2 max-h-500px h-[350px]">
                            <div className="flex justify-between px-4 py-2">
                                <span className='font-semibold text-black/[0.5]'>SubTotal:</span>
                                <span className='font-semibold'>₹35,000</span>
                            </div>
                            <div className="flex justify-between px-4 py-2">
                                <span className='font-semibold text-black/[0.5]'>Estimated Delivery and Handling:</span>
                                <span className='font-semibold'>₹750</span>
                            </div>
                            <div className='border-2 border-gray-500 m-4'/>
                            <div className="flex justify-between px-4 py-2">
                            <span className='font-semibold text-black/[0.5]'>Total:</span>
                                <span className='font-semibold'>₹35,750</span>
                            </div>
                        </div>   
                        <button className="w-full bg-rose-500 p-4 my-4 hover:scale-95 transition-all duration-150 ease-in" onClick={pageRedirect()}>Checkout</button>
                    </div>
                </div>

            </div>
        </Wrapper>
    </div>
    
}

export default Cart