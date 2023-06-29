// import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import watches from "../../assets/watches/heroWatches.png";
import smart from "../../assets/watches/smartWatches.png";
import female from "../../assets/watches/femaleWatches.png";
import dot from "../../assets/dots.png";

const Hero = () => {
    const settings = {
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="h-screen w-full bg-heroBg flex items-center justify-center overflow-hidden">

        <div className='h-full flex items-center justify-center min-w-[100%] '>

          <Slider {...settings} className='w-full flex items-center justify-center'>

            <div className='h-full flex items-center justify-center ml-[250px] font-roboto'>
              <div className='w-[65%] h-[85%] flex  items-center justify-between relative'>

                <h5 className='text-gray-200 font-roboto font-medium'>Timeless Elegance
                </h5>

                <img src={watches} alt="" className='  w-[600px] absolute top-[60px] left-[140px] z-[1]' />

                <div className='w-[330px] h-[500px] border-4  border-white mt-[30px] relative'> 

                  <div className='absolute bottom-[23px] left-[40px] flex text-gray-200 justify-between items-center w-[250px]'>  
                    <h4 className='text-[20px] font-bold mr-[20px] '>$500.00</h4>

                    <div className=''>
                      <h4 className='text-[14px] font-medium '>UNISEX WATCHES</h4>
                      <h6 className='text-[9px] text-roboto '>Discover our exquisite, elegant, uniques and classy collection of luxury watches today</h6>
                    </div>
                  </div>

                  <div className='absolute bottom-[-10px] left-[115px] flex text-gray-200 justify-center items-center w-[100px]  bg-heroBg rounded-3xl overflow-hidden '>30% 0FF</div>

                  <div className='absolute top-[-16px] left-[61px] flex text-gray-200 justify-center items-center w-[200px] bg-heroBg rounded-3xl font-medium border-2  border-white '>EXQUISITE</div>

                </div>

                <h5 className='text-gray-200 font-roboto font-medium'>Luxury Craftsmanship
                </h5>

                <img src={dot} alt="" className='absolute w-[250px]' />

                <img src={dot} alt="" className='absolute w-[250px] right-0 rotate-180' />

              </div>
            </div>   

            <div className='h-full flex items-center justify-center ml-[250px] font-roboto'>
              <div className='w-[65%] h-[85%] flex  items-center justify-between relative'>

                <h5 className='text-gray-200 font-roboto font-medium'>Timeless Elegance
                </h5>

                <img src={smart} alt="" className='  w-[500px] absolute top-[80px] left-[220px] z-[1]' />

                <div className='w-[330px] h-[500px] border-4  border-white mt-[30px] relative'> 

                  <div className='absolute bottom-[23px] left-[40px] flex text-gray-200 justify-between items-center w-[250px]'>  
                    <h4 className='text-[20px] font-bold mr-[20px]'>$800.00</h4>

                    <div className=''>
                      <h4 className='text-[14px] font-medium '>iWATCHES</h4>
                      <h6 className='text-[9px] '>Discover our exquisite, elegant, uniques and classy collection of luxury watches today</h6>
                    </div>
                  </div>

                  <div className='absolute bottom-[-10px] left-[115px] flex text-gray-200 justify-center items-center w-[100px]  bg-heroBg rounded-3xl overflow-hidden '>30% 0FF</div>

                  <div className='absolute top-[-16px] left-[61px] flex text-gray-200 justify-center items-center w-[200px] bg-heroBg rounded-3xl font-medium border-2  border-white '>EXQUISITE</div>

                </div>

                <h5 className='text-gray-200 font-roboto font-medium'>Luxury Craftsmanship
                </h5>

                <img src={dot} alt="" className='absolute w-[250px]' />

                <img src={dot} alt="" className='absolute w-[250px] right-0 rotate-180' />

              </div>
            </div>

            <div className='h-full flex items-center justify-center ml-[250px] font-roboto'>
              <div className='w-[65%] h-[85%] flex  items-center justify-between relative'>

                <h5 className='text-gray-200 font-roboto font-medium'>Timeless Elegance
                </h5>

                <img src={female} alt="" className='  w-[500px] absolute top-[70px] left-[160px] z-[1]' />

                <div className='w-[330px] h-[500px] border-4  border-white mt-[30px] relative'> 

                  <div className='absolute bottom-[23px] left-[40px] flex text-gray-200 justify-between items-center w-[250px]'>  
                    <h4 className='text-[20px] font-bold mr-[20px]'>$700.00</h4>

                    <div className=''>
                      <h4 className='text-[14px] font-medium '>FEMALE WATCHES</h4>
                      <h6 className='text-[9px] '>Discover our exquisite, elegant, uniques and classy collection of luxury watches today</h6>
                    </div>
                  </div>

                  <div className='absolute bottom-[-10px] left-[115px] flex text-gray-200 justify-center items-center w-[100px]  bg-heroBg rounded-3xl overflow-hidden '>30% 0FF</div>

                  <div className='absolute top-[-16px] left-[61px] flex text-gray-200 justify-center items-center w-[200px] bg-heroBg rounded-3xl font-medium border-2  border-white '>EXQUISITE</div>

                </div>

                <h5 className='text-gray-200 font-roboto font-medium'>Luxury Craftsmanship
                </h5>

                <img src={dot} alt="" className='absolute w-[250px]' />

                <img src={dot} alt="" className='absolute w-[250px] right-0 rotate-180' />

              </div>
            </div>

          </Slider>

        </div>

      </div>
    );
  };

  export default Hero;
  










