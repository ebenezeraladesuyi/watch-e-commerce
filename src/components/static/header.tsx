// import React from 'react'

const Header = () => {
    return (
      <div className="w-full h-16 bg-heroBg flex justify-between items-center text-white fixed">
  
          <div className="font-bold text-[25px] ml-[50px]">LOGO</div>
  
          <div className="flex ">
              <div className="mx-[15px] font-semibold cursor-pointer hover:via-yellow-500 font-roboto hover:scale-75 ease-in-out duration-300">Home</div>
              <div className="mx-[15px] font-semibold cursor-pointer hover:via-yellow-500 font-roboto hover:scale-75 ease-in-out duration-300">Men</div>
              <div className="mx-[15px] font-semibold cursor-pointer hover:via-yellow-500 font-roboto hover:scale-75 ease-in-out duration-300">Women</div>
          </div>
  
          <div className="flex mr-[40px]">
              <button className=" w-[130px] h-[40px] bg-transparent border-white rounded text-white font-semibold flex justify-center items-center cursor-pointer hover:scale-75 ease-in-out duration-300 font-roboto">Shop Now</button>
          </div>
          
      </div>
    )
  }
  
  export default Header;