import React from 'react'
import Wrapper from '@/components/Wrapper'
import ProductCard from '@/components/ProductCard'
import { useRouter } from 'next/router'

const Category = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                  
                    <div className="text-[38px] md:text-[74px] mb-5 font-semibold leading-tight">
                        Running Shoes
                    </div>
                </div>
            </Wrapper>
            <div className="grid grid-cols-1 mx-2 md:mx-10 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 h-fit">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Category 