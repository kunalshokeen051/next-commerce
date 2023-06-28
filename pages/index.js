import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"
import { useContext } from "react"
import Loader from "@/components/Loader"
import { Context } from "@/utils/Context"

export default function Home() {
 const {isLoading, setIsLoading} = useContext(Context);
 setTimeout(() => {
  setIsLoading(false);
  }, 4000);


 return (
   <main className="">
   {isLoading ? <Loader/>
    :<>
    <HeroBanner />
      <Wrapper>
      {/* heading start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            Just Do It. Step Up Your Game with Nike Shoes: Where Legends Are Made.
          </div>
        </div>
        {/* heading end */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 h-fit">
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
        </div>
        </Wrapper>
    </>}
    </main>
  )
}
