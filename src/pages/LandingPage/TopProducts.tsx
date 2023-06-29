import { useState } from 'react'
import watch from "../../assets/watches/watch1.png"
import watch2 from "../../assets/watches/watch12-F.png"

const TopProducts = () => {

    const [show, setShow] = useState(false)

    const reveal = () => {
        setShow(!show)
    }


  return (
    <div className="w-full h-[100vh] flex justify-center items-center overflow-hidden transition-all ease-in-out">

        <div className="w-[90%] h-[90%] flex flex-col items-center">

            <h2 className="text-[20px] text-heroBg font-bold text-center animate-bounce border-b-2 border-t-2 border-heroBg mt-[20px]">TOP PRODUCTS
            </h2>

            <div className="w-[40%] bg-color1 flex justify-around items-center text-heroBg h-[50px] mt-[20px] mb-[30px]">
                <h3 className="text-[20px] font-bold font-roboto cursor-pointer hover:text-orange-600" onClick={reveal}>ROLEX</h3>

                <h3 className="text-[20px] font-bold font-roboto cursor-pointer hover:text-orange-600" onClick={reveal}>CALVIN KLIEN
                </h3>
            </div>

            {
                show ?

                (<div className="w-[70%] flex justify-between items-center font-roboto transition-all ease-in-out duration-1000 text-heroBg">

                <div className='w-[220px]'>
                    <div className=''>
                      <h4 className='text-[18px] font-bold text-right'>FASHION STATEMENTS</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px] text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                    </div>
                    <div className=''>
                      <h4 className='text-[18px] font-bold text-right '>UNMATCHED QUALITY</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px] text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!
                       </h6>
                    </div>
                    <div className=''>
                      <h4 className='text-[18px] font-bold text-right '>SLEEK DESIGN</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px] text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci! </h6>
                    </div>
                </div>

                <img src={watch2} alt="" className="w-[190px] hover:rotate-90 transition-all ease-in-out duration-500"/>

                <div className='w-[220px]'>
                    <div className=''>
                      <h4 className='text-[18px] font-bold '>CLASSIC APPEAL</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                    </div>
                    <div className=''>
                      <h4 className='text-[18px] font-bold '>EXQUISITE STYLE</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                    </div>
                    <div className=''>
                      <h4 className='text-[18px] font-bold '>LUXURIOUS ELEGANCE</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                    </div>
                </div>

                </div>)

                :

                (
                <div className="w-[70%] flex justify-between items-center font-roboto transition-all ease-in-out duration-1000 text-heroBg">

                <div className='w-[220px]'>
                    <div className=''>
                      <h4 className='text-[18px] font-bold text-right'>FASHION STATEMENTS</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px] text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                    </div>
                    <div className=''>
                      <h4 className='text-[18px] font-bold text-right '>UNMATCHED QUALITY</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px] text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!
                       </h6>
                    </div>
                    <div className=''>
                      <h4 className='text-[18px] font-bold text-right '>SLEEK DESIGN</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px] text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci! </h6>
                    </div>
                </div>

                <img src={watch} alt="" className="w-[350px] hover:rotate-90 transition-all ease-in-out duration-500"/>

                <div className='w-[220px]'>
                    <div className=''>
                      <h4 className='text-[18px] font-bold '>CLASSIC APPEAL</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                    </div>
                    <div className=''>
                      <h4 className='text-[18px] font-bold '>EXQUISITE STYLE</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                    </div>
                    <div className=''>
                      <h4 className='text-[18px] font-bold '>LUXURIOUS ELEGANCE</h4>
                      <h6 className='text-[14px] text-roboto mb-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus adipisci!</h6>
                    </div>
                </div>

                </div>)
            }

            <button className='w-[200px] h-[40px] mt-[30px] bg-heroBg rounded-3xl text-white font-bold cursor-pointer animate-pulse'>SHOP NOW</button>

        </div>

    </div>
  )
}

export default TopProducts