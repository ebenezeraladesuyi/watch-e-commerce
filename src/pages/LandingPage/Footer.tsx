// import React from 'react'
import { AiOutlineFacebook, AiFillTwitterSquare, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="w-full h-[150px] bg-heroBg flex justify-between items-center text-white font-roboto overflow-hidden">

        <div className="font-bold text-[20px] text-center leading-4 ml-[50px] font-roboto">VOLATIC <br/> 
            <span className="text-[16px] text-gray-300">
                watches
            </span>
        </div>

        <div className="flex items-center gap-[6rem]">
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
        
        <div className="flex mr-[40px] flex-col">
            <div className=" text-[20px] gap-[10px] flex items-center">
                <AiOutlineFacebook />
                <AiFillTwitterSquare />
                <AiFillInstagram />
                <AiOutlineWhatsApp />
            </div>

            <div className="font-bold text-[16px] mt-[15px]">
                All Right Reserved. C.2023
            </div>
        </div>

    </div>
  )
}

export default Footer;