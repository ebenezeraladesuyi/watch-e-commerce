// import React from 'react'
import { AiOutlineFacebook, AiFillTwitterSquare, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="w-full min-h-[150px] bg-heroBg flex flex-col md:flex-row md:justify-between md:items-center text-white font-roboto overflow-hidden pt-[40px] pb-[40px] pl-[20px] md:p-0">

        <div className="font-bold text-[20px] md:text-center   leading-4 md:ml-[50px] font-roboto mb-[20px] md:mb-0">VOLATIC <br/> 
            <span className="text-[16px] text-gray-300 ml-[13px] md:ml-0">
                watches
            </span>
        </div>

        <div className=" font-roboto mb-[20px] md:mb-0">
            <h5>
                ADDRESS: Suite 14, Volatic Towers, Victoria-Island, Lagos, Nigeria.
            </h5>
        </div>

        <div className="flex items-center gap-[6rem] mb-[20px] md:mb-0 w-[270px] justify-center">
            <div className="flex flex-col">
                <h5 className="text-[14px] hover:text-orange-500 cursor-pointer">Unisex</h5>
                <h5 className="text-[14px] hover:text-orange-500 cursor-pointer">Men</h5>
                <h5 className="text-[14px] hover:text-orange-500 cursor-pointer">Women</h5>
            </div>

            <div>
                <h5 className="text-[14px] hover:text-orange-500 cursor-pointer">Contact</h5>
                <h5 className="text-[14px] hover:text-orange-500 cursor-pointer">Feedback</h5>
                <h5 className="text-[14px] hover:text-orange-500 cursor-pointer">Terms & Condition</h5>
            </div>
        </div>
        
        <div className="flex mr-[40px] flex-col mb-[20px] md:mb-0 ">
            <div className=" text-[20px] gap-[10px] flex items-center">
                <AiOutlineFacebook />
                <AiFillTwitterSquare />
                <AiFillInstagram />
                <AiOutlineWhatsApp />
            </div>

            <div className="font-bold text-[16px] mt-[15px] ">
                All Right Reserved. C.2023
            </div>
        </div>

    </div>
  )
}

export default Footer;