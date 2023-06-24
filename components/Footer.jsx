import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="bg-black text-slate-200 flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="bg-black text-slate-200 flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="bg-black text-slate-200 flex flex-col gap-3 shrink-0">
                        <div className="bg-black text-slate-200 font-oswald font-medium uppercase text-sm cursor-pointer">
                            Find a store
                        </div>
                        <div className="bg-black text-slate-200 font-oswald font-medium uppercase text-sm cursor-pointer">
                            become a partner
                        </div>
                        <div className="bg-black text-slate-200 font-oswald font-medium uppercase text-sm cursor-pointer">
                            sign up for email
                        </div>
                        <div className="bg-black text-slate-200 font-oswald font-medium uppercase text-sm cursor-pointer">
                            send us feedback
                        </div>
                        <div className="bg-black text-slate-200 font-oswald font-medium uppercase text-sm cursor-pointer">
                            student discount
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="bg-black text-slate-200 flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="bg-black text-slate-200 flex flex-col gap-3">
                            <div className="bg-black text-slate-200 font-oswald font-medium uppercase text-sm">
                                get help
                            </div>
                            <div className="bg-black text-slate-200 text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Order Status
                            </div>
                            <div className="bg-black text-slate-200 text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Delivery
                            </div>
                            <div className="bg-black text-slate-200 text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Returns
                            </div>
                            <div className="bg-black text-slate-200 text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Options
                            </div>
                            <div className="bg-black text-slate-200 text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="bg-black text-slate-200 flex flex-col gap-3">
                            <div className="bg-black text-slate-200 font-oswald font-medium uppercase text-sm">
                                About nike
                            </div>
                            <div className="bg-black text-slate-200 text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                News
                            </div>
                            <div className="bg-black text-slate-200 text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="bg-black text-slate-200 text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Investors
                            </div>
                            <div className="bg-black text-slate-200 text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="bg-black flex gap-4 justify-center md:justify-start">
                    <div onClick={() =>
                        window.open("https://www.facebook.com/nike/", "_blank")} className=" w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:scale-125 transition-all duration-200 ease-out cursor-pointer">
                        <FaFacebookF size={20} />
                    </div>
                    <div onClick={() =>
                        window.open("https://twitter.com/Nike", "_blank")} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black   hover:scale-125 transition-all duration-200 ease-out cursor-pointer">
                        <FaTwitter size={20} />
                    </div>
                    <div onClick={() =>
                        window.open("https://www.youtube.com/user/NIKE", "_blank")} className=" w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:scale-125 transition-all duration-200 ease-out cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div onClick={() =>
                        window.open("https://www.instagram.com/nike/", "_blank")} s className=" w-10 h-10 rounded-full bg-white flex items-center justify-center text-black  cursor-pointer hover:scale-125 transition-all duration-200 ease-out">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="bg-black text-slate-200 flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="bg-black text-slate-200 text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="bg-black text-slate-200 flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="bg-black text-slate-200 text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="bg-black text-slate-200 text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="bg-black text-slate-200 text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="bg-black text-slate-200 text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;