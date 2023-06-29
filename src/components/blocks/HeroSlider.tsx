// import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import watches from "../../assets/watches/heroWatches.png"

const HeroSlider = () => {
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

            <div className='h-full flex items-center justify-center ml-[250px]'>
              <div className='w-[65%] h-[85%] flex  items-center justify-between relative'>

                <h5 className='text-gray-200 font-roboto font-medium'>Timeless Elegance
                </h5>

                <div className='w-[330px] h-[500px] border-4  border-white mt-[30px]'>
                  <img src={watches} alt="" className='  w-[600px] absolute top-[60px] left-[140px]' />

                  <div className='absolute bottom-[30px] left-[308px] flex text-gray-200 justify-between items-center w-[250px]'>
                    <h4 className='text-[20px] font-bold mr-[20px]'>$500.00</h4>

                    <div className=''>
                      <h4 className='text-[14px] font-medium '>UNISEX WATCHES</h4>
                      <h6 className='text-[9px] '>Discover our exquisite, elegant, uniques and classy collection of luxury watches today</h6>
                    </div>
                  </div>

                  <div className='absolute bottom-[-7px] left-[390px] flex text-gray-200 justify-center items-center w-[100px]  bg-heroBg rounded-3xl'>30% 0FF</div>

                  <div className='absolute top-[20px] left-[330px] flex text-gray-200 justify-center items-center w-[200px] bg-heroBg rounded-3xl font-medium border-2  border-white '>EXQUISITE</div>

                </div>

                <h5 className='text-gray-200 font-roboto font-medium'>Luxury Craftsmanship
                </h5>

              </div>
            </div>

            <div className='h-full flex items-center justify-center ml-[250px]'>
              <div className='w-[65%] h-[85%] flex  items-center justify-between relative'>

                <h5 className='text-gray-200 font-roboto font-medium'>Timeless Elegance
                </h5>

                <div className='w-[330px] h-[500px] border-4  border-white mt-[30px]'>
                  <img src={watches} alt="" className='  w-[600px] absolute top-[60px] left-[140px]' />

                  <div className='absolute bottom-[30px] left-[308px] flex text-gray-200 justify-between items-center w-[250px]'>
                    <h4 className='text-[20px] font-bold mr-[20px]'>$500.00</h4>

                    <div className=''>
                      <h4 className='text-[14px] font-medium '>UNISEX WATCHES</h4>
                      <h6 className='text-[9px] '>Discover our exquisite, elegant, uniques and classy collection of luxury watches today</h6>
                    </div>
                  </div>

                  <div className='absolute bottom-[-7px] left-[390px] flex text-gray-200 justify-center items-center w-[100px]  bg-heroBg rounded-3xl'>30% 0FF</div>

                  <div className='absolute top-[20px] left-[330px] flex text-gray-200 justify-center items-center w-[200px] bg-heroBg rounded-3xl font-medium border-2  border-white '>EXQUISITE</div>

                </div>

                <h5 className='text-gray-200 font-roboto font-medium'>Luxury Craftsmanship
                </h5>

              </div>
            </div>

            <div className='h-full flex items-center justify-center ml-[250px]'>
              <div className='w-[65%] h-[85%] flex  items-center justify-between relative'>

                <h5 className='text-gray-200 font-roboto font-medium'>Timeless Elegance
                </h5>

                <div className='w-[330px] h-[500px] border-4  border-white mt-[30px]'>
                  <img src={watches} alt="" className='  w-[600px] absolute top-[60px] left-[140px]' />

                  <div className='absolute bottom-[30px] left-[308px] flex text-gray-200 justify-between items-center w-[250px]'>
                    <h4 className='text-[20px] font-bold mr-[20px]'>$500.00</h4>

                    <div className=''>
                      <h4 className='text-[14px] font-medium '>UNISEX WATCHES</h4>
                      <h6 className='text-[9px] '>Discover our exquisite, elegant, uniques and classy collection of luxury watches today</h6>
                    </div>
                  </div>

                  <div className='absolute bottom-[-7px] left-[390px] flex text-gray-200 justify-center items-center w-[100px]  bg-heroBg rounded-3xl'>30% 0FF</div>

                  <div className='absolute top-[20px] left-[330px] flex text-gray-200 justify-center items-center w-[200px] bg-heroBg rounded-3xl font-medium border-2  border-white '>EXQUISITE</div>

                </div>

                <h5 className='text-gray-200 font-roboto font-medium'>Luxury Craftsmanship
                </h5>

              </div>
            </div>


          </Slider>

        </div>

      </div>
    );
  };

  export default HeroSlider;
  










