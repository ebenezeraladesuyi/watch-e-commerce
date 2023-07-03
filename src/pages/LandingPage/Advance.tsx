// import React from 'react'
import { MdNotificationsNone } from 'react-icons/md';
import { SiPivotaltracker } from 'react-icons/si';
import { RiSunLine } from 'react-icons/ri';
import { AiFillAudio } from 'react-icons/ai';
import { LiaSyncSolid } from 'react-icons/lia';
import { FaBatteryFull } from 'react-icons/fa';
import iWatch from '../../assets/watches/iWatch8.png'


const Advance = () => {
  return (
    <div className="w-full min-h-[60vh] bg-gray-50 overflow-hidden flex justify-center items-center mb-[30px] md:mb-0">

        <div className="w-[90%] flex justify-around items-center flex-wrap">

            <img src={iWatch} alt="" className="md:w-[400px] w-[250px] mt-[15px] md:mt-0" />

            <div className='flex flex-col justify-center font-roboto'>

                <div className='flex '>
                    <div className='text-[20px] md:w-[120px] w-[90px] p-[12px] border-r-2 border-l-2 border-b-2 border-gray-200 flex flex-col items-center text-blue-500'>
                        <MdNotificationsNone />
                        <h5 className='md:text-[14px] text-[10px] font-bold text-center mt-[5px]'>ADVANCED NOTIFICATION
                        </h5>
                    </div>

                    <div className='text-[20px] md:w-[120px] w-[90px] p-[12px] border-r-2 border-b-2 border-gray-200 flex flex-col items-center text-blue-500'>
                        <SiPivotaltracker />
                        <h5 className='md:text-[14px] text-[10px] font-bold text-center mt-[5px]'>ACTIVITY TRACKER
                        </h5>
                    </div>

                    <div className='text-[20px] md:w-[120px] w-[90px] p-[12px] border-r-2  border-b-2 border-gray-200 flex flex-col items-center text-blue-500'>
                        <RiSunLine />
                        <h5 className='md:text-[14px] text-[10px] font-bold text-center mt-[5px]'>READABLE IN SUNLIGHT
                        </h5>
                    </div>

                </div>

                <div className='flex'>

                    <div className='text-[20px] md:w-[120px] w-[90px] p-[12px] border-r-2  border-l-2 border-gray-200 flex flex-col items-center text-blue-500'>
                        <AiFillAudio />
                        <h5 className='md:text-[14px] text-[10px] font-bold text-center mt-[5px]'>AUDIO PROMPTS</h5>
                    </div>

                    <div className='text-[20px] md:w-[120px] w-[90px] p-[12px] border-r-2 border-gray-200 flex flex-col items-center text-blue-500'>
                        <LiaSyncSolid />
                        <h5 className='md:text-[14px] text-[10px] font-bold text-center mt-[5px]'>AUTO SYNC</h5>
                    </div>

                    <div className='text-[20px] md:w-[120px] w-[90px] p-[12px] border-r-2 border-gray-200 flex flex-col items-center text-blue-500'>
                        <FaBatteryFull />
                        <h5 className='md:text-[14px] text-[10px] font-bold text-center mt-[5px]'>LASTING BATTERY</h5>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Advance