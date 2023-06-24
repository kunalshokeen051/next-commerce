import React, { useState, useEffect } from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Image from 'next/image';

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);


  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      }
      else {
        setShow("shadow-md")
      }
    }
    else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  }


  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY])


  return (
    <header className={`w-full
    h-[50px] md:h-[80px] items-center  justify-between
    z-20 sticky top-0 transition-transform duration-300 
    ${show} `}>
      <Wrapper className="h-[60px] flex  justify-between items-center">
        <Link href="/">
          <Image
          className=''
            src="/logo.svg"
            width={80}
            height={100}
            alt='logo.svg'
          />
        </Link>
        <Menu showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
        />
        {mobileMenu && (
          <MenuMobile showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )
        }

        <div className="flex items-center gap-6 text-black ">

          {/* icon start */}
          <div className='w-8 md:12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
            <IoMdHeartEmpty className='text-[19px] md:text-[24px]' />
            <div className='absolute h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full  top-1 bg-rose-800 left-4 md:left-5 text-white text-[10px] flex justify-center items-center px-[2px] md:px-[5px] md:text-[12px] '>51</div>
          </div>
          {/* icon end */}

          {/* icon start */}
          <div className='w-8 md:12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
            <BsCart className='text-[15px] md:text-[20px]' />
            <div className='absolute h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-rose-800 top-1 left-4 md:left-5 text-white text-[10px] flex justify-center items-center px-[2px] md:px-[5px] md:text-[12px]'>5</div>
          </div>
          {/* icon end */}


          {/* mobile icon start */}
          <div className="'w-8 md:12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative md:-mr-2 mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className='text-[16px]'
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className='text-[20px]'
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* mobile icon end */}

        </div>

      </Wrapper>
    </header>
  )
}

export default Header