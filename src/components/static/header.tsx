// import React from 'react'
import { useState } from "react";
import { AiOutlineMenuFold }  from "react-icons/ai";

const Header = () => {

    const [show, setShow] = useState(false);

    const showw = () => {
        setShow(!show)
    }


    return (
      <div className="w-full h-16 bg-heroBg flex justify-between items-center text-white z-[50] fixed ">
  
          <div className="font-bold text-[20px] text-center leading-4 ml-[30px] md:ml-[50px] font-roboto">VOLATIC <br/> <span className="text-[16px] text-gray-300">watches</span></div>
  
          <div className="md:flex hidden">
              <div className="mx-[15px] font-semibold cursor-pointer hover:via-yellow-500 font-roboto hover:scale-75 ease-in-out duration-300">Home</div>
              <div className="mx-[15px] font-semibold cursor-pointer hover:via-yellow-500 font-roboto hover:scale-75 ease-in-out duration-300">Men</div>
              <div className="mx-[15px] font-semibold cursor-pointer hover:via-yellow-500 font-roboto hover:scale-75 ease-in-out duration-300">Women</div>
          </div>
  
          <div className="md:flex mr-[40px] hidden">
              <button className=" w-[130px] h-[40px] bg-transparent border-white rounded text-white font-semibold flex justify-center items-center cursor-pointer hover:scale-75 ease-in-out duration-300 font-roboto">Shop Now</button>
          </div>

          <div className="md:hidden mr-[25px] text-[20px]" onClick={showw}>
            <AiOutlineMenuFold />
          </div>

          {
            show ?
                <div className="absolute bg-black h-[200px] w-[150px] top-[70px] right-[20px] rounded  flex-col justify-around items-center transition-all ease-in-out duration-1000 flex md:hidden">
                <div className="mx-[15px] font-semibold cursor-pointer font-roboto hover:scale-75 ease-in-out duration-300 text-blue-500">Home</div>
                <div className="mx-[15px] font-semibold cursor-pointer font-roboto hover:scale-75 ease-in-out duration-300 text-blue-500">Men</div>
                <div className="mx-[15px] font-semibold cursor-pointer font-roboto hover:scale-75 ease-in-out duration-300 text-blue-500">Women</div>

                
                <button className=" w-[130px] h-[40px]  border-white rounded text-white font-semibold flex justify-center items-center cursor-pointer hover:scale-75 ease-in-out duration-300 font-roboto bg-blue-500">Shop Now</button>
            </div>

            : null
          }
          
      </div>
    )
  }
  
  export default Header;