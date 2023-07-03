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
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 700,
    };
  
    return (
      <div className="min-h-screen w-full bg-heroBg flex items-center justify-center overflow-hidden">

        <div className='h-full flex items-center justify-center w-[100%]  max-w-[100vw] '>

          <Slider {...settings} className='w-[100%]   '>

            <div className='h-full flex items-center justify-center font-roboto md:ml-[250px] ml-[35px]'>
              <div className='md:w-[65%] w-[300px] h-[100%] flex flex-col md:flex md:flex-row items-center justify-between relative md:mt-[0px]'>

                <h5 className='text-gray-200 font-roboto font-medium mb-[30px] md:mb-[0px]'>Timeless Elegance
                </h5>

                <img src={watches} alt="" className='  md:w-[600px] w-[300px] absolute md:top-[60px] top-[100px] md:left-[140px] z-[1]' />

                <div className='md:w-[330px] md:h-[500px] w-[210px] h-[320px] border-4  border-white md:mt-[30px] relative'> 

                  <div className='absolute md:bottom-[23px] md:left-[40px] left-[9px] bottom-[15px] flex text-gray-200 justify-between items-center md:w-[250px]'>  
                    <h4 className='md:text-[20px] text-[12px] font-bold md:mr-[20px] mr-[10px] '>$500.00</h4>

                    <div className=''>
                      <h4 className='md:text-[14px] text-[10px] font-medium '>UNISEX WATCHES</h4>
                      <h6 className='text-[9px] text-roboto '>Discover our exquisite, elegant, uniques and classy collection of luxury watches today</h6>
                    </div>
                  </div>

                  <div className='absolute md:bottom-[-10px] bottom-[-12px] left-[55px]  md:left-[115px] flex text-gray-200 justify-center items-center w-[100px]  bg-heroBg rounded-3xl overflow-hidden '>
                    30% 0FF
                  </div>

                  <div className='absolute top-[-16px]  md:left-[61px] left-[25px] text flex text-gray-200 justify-center items-center md:w-[200px] w-[150px] bg-heroBg rounded-3xl font-medium border-2  border-white'>
                    EXQUISITE
                  </div>

                </div>

                <h5 className='text-gray-200 font-roboto font-medium mt-[30px] md:mt-[0px]'>Luxury Craftsmanship
                </h5>

                <img src={dot} alt="" className='absolute md:w-[250px] w-[150px] left-[20px]  md:bottom-[100px] md:left-0' />

                <img src={dot} alt="" className='absolute md:w-[250px] w-[150px] bottom-0 md:bottom-[100px] right-[20px] md:right-0 rotate-180' />

              </div>
            </div>

            <div className='h-full flex items-center justify-center font-roboto md:ml-[250px] ml-[35px]'>
              <div className='md:w-[65%] w-[300px] h-[100%] flex flex-col md:flex md:flex-row items-center justify-between relative  md:mt-[0px] '>

                <h5 className='text-gray-200 font-roboto font-medium mb-[30px] md:mb-[0px]'>Timeless Elegance
                </h5>

                <img src={smart} alt="" className='  md:w-[500px] w-[300px] absolute md:top-[80px] top-[85px] md:left-[220px] left-[20px] z-[1]' />

                <div className='md:w-[330px] md:h-[500px] w-[210px] h-[320px] border-4  border-white md:mt-[30px] relative'> 

                  <div className='absolute md:bottom-[23px] md:left-[40px] left-[9px] bottom-[15px] flex text-gray-200 justify-between items-center md:w-[250px]'>  
                    <h4 className='md:text-[20px] text-[12px] font-bold md:mr-[20px] mr-[10px] '>$500.00</h4>

                    <div className=''>
                      <h4 className='md:text-[14px] text-[10px] font-medium '>UNISEX WATCHES</h4>
                      <h6 className='text-[9px] text-roboto '>Discover our exquisite, elegant, uniques and classy collection of luxury watches today</h6>
                    </div>
                  </div>

                  <div className='absolute md:bottom-[-10px] bottom-[-12px] left-[55px]  md:left-[115px] flex text-gray-200 justify-center items-center w-[100px]  bg-heroBg rounded-3xl overflow-hidden '>
                    30% 0FF
                  </div>

                  <div className='absolute top-[-16px]  md:left-[61px] left-[25px] text flex text-gray-200 justify-center items-center md:w-[200px] w-[150px] bg-heroBg rounded-3xl font-medium border-2  border-white'>
                    EXQUISITE
                  </div>

                </div>

                <h5 className='text-gray-200 font-roboto font-medium mt-[30px] md:mt-[0px]'>Luxury Craftsmanship
                </h5>

                <img src={dot} alt="" className='absolute md:w-[250px] w-[150px] left-[20px]  md:bottom-[100px] md:left-0' />

                <img src={dot} alt="" className='absolute md:w-[250px] w-[150px] bottom-0 md:bottom-[100px] right-[20px] md:right-0 rotate-180' />

              </div>
            </div>  
            
            <div className='h-full flex items-center justify-center font-roboto md:ml-[250px] ml-[35px]'>
              <div className='md:w-[65%] w-[300px] h-[100%] flex flex-col md:flex md:flex-row items-center justify-between relative   md:mt-[0px] '>

                <h5 className='text-gray-200 font-roboto font-medium mb-[30px] md:mb-[0px]'>Timeless Elegance
                </h5>

                <img src={female} alt="" className='  md:w-[500px] w-[300px] absolute md:top-[70px] bottom-[125px] md:left-[160px] right-[6px] z-[1]' />

                <div className='md:w-[330px] md:h-[500px] w-[210px] h-[320px] border-4  border-white md:mt-[30px] relative'> 

                  <div className='absolute md:bottom-[23px] md:left-[40px] left-[9px] bottom-[15px] flex text-gray-200 justify-between items-center md:w-[250px]'>  
                    <h4 className='md:text-[20px] text-[12px] font-bold md:mr-[20px] mr-[10px] '>$500.00</h4>

                    <div className=''>
                      <h4 className='md:text-[14px] text-[10px] font-medium '>UNISEX WATCHES</h4>
                      <h6 className='text-[9px] text-roboto '>Discover our exquisite, elegant, uniques and classy collection of luxury watches today</h6>
                    </div>
                  </div>

                  <div className='absolute md:bottom-[-10px] bottom-[-12px] left-[55px]  md:left-[115px] flex text-gray-200 justify-center items-center w-[100px]  bg-heroBg rounded-3xl overflow-hidden '>
                    30% 0FF
                  </div>

                  <div className='absolute top-[-16px]  md:left-[61px] left-[25px] text flex text-gray-200 justify-center items-center md:w-[200px] w-[150px] bg-heroBg rounded-3xl font-medium border-2  border-white'>
                    EXQUISITE
                  </div>

                </div>

                <h5 className='text-gray-200 font-roboto font-medium mt-[30px] md:mt-[0px]'>Luxury Craftsmanship
                </h5>

                <img src={dot} alt="" className='absolute md:w-[250px] w-[150px] left-[20px]  md:bottom-[100px] md:left-0' />

                <img src={dot} alt="" className='absolute md:w-[250px] w-[150px] bottom-0 md:bottom-[100px] right-[20px] md:right-0 rotate-180' />

              </div>
            </div> 

          </Slider>

        </div>

      </div>
    );
  };

  export default Hero;
  





  // <img src={smart} alt="" className='  w-[500px] absolute top-[80px] left-[220px] z-[1]' />





  // <img src={female} alt="" className='  w-[500px] absolute top-[70px] left-[160px] z-[1]' />


