import React from 'react'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <Link href="/product/1">
     <img className='w-full' src="/product-1.webp" alt="prod.webp" />
     <div className="p-4 text-black/[0.2]">
       <h2 className="text-lg font-medium">Product Name</h2>
     <div className="flex items-center text-black/[0.5]">
   <p className="mr-2 text-lg font-semibold"> &#8377; 3599</p>
   <p className="text-base font-medium line-through">
   &#8377; 4999
   </p>
   <p className="ml-auto text-base font-medium text-rose-400">20% Off</p>
     </div>
     </div>
    </Link>
  )
}

export default ProductCard