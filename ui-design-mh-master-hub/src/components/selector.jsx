import { FaComputer } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

import c01 from '../image/c01.png';

import Style from '../css/Vibration.module.css';

function Selector() {
  return (
    <>
      {/* selector */}
      <div className='mt-30 mb-30 px-4 sm:px-6 md:px-10'>

        {/* header */}
        <div className='text-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl'>
            Why Choose <br></br>Masters in Me?
          </h1>
          <p className='text-gray-400 text-sm sm:text-base mt-3 sm:mt-5'>
            Unlock your true potential and discover a world of opportunities <br className='block sm:hidden' />
            that align with your skills, interests, and aspirations
          </p>
        </div>

        {/* bubbling body */}
        <div className='flex flex-col md:flex-row w-full text-center place-content-center items-center justify-around gap-6 md:gap-15 mt-8 md:mt-12'>

          {/* left */}
          <div id="left" className='w-full md:w-1/3 flex flex-col gap-6'>

            <div className='text-center items-center place-content-center p-5 sm:p-7 shadow-xl rounded-3xl w-full'>
              <div className='flex items-center justify-center'>
                <FaComputer className='text-4xl sm:text-5xl md:text-6xl text-blue-900'/>
              </div>
              <h1 className='text-xl sm:text-2xl mt-3 font-bold'>Showcase Work</h1>
              <p className='text-gray-500 text-sm sm:text-base mt-2'>Showcase your project to stand out among all</p>
              <div className='flex justify-center mt-4 sm:mt-5'>
                <span className='flex w-28 sm:w-32 justify-center bg-blue-500 p-2 sm:p-3 rounded-3xl text-white text-sm sm:text-base'>Add Work</span>
              </div>
            </div>

            <div className='flex text-center items-center justify-center p-3 sm:p-4 shadow-xl rounded-3xl w-full'>
              <div className='flex items-center justify-center'>
                <FaGlobeAmericas className='text-3xl sm:text-4xl text-blue-900'/>
              </div>
              <div className='text-left ml-3'>
                <h1 className='text-xl sm:text-2xl mt-3 font-bold'>100K +</h1>
                <p className='text-sm sm:text-base'>Worldwide Active Users</p>
              </div>
            </div>

          </div>

          {/* center */}
          <div id="center" className='w-full md:w-1/3 flex justify-center'>

            <div className={Style.vibrant}>
     
              <div className={Style.ripple}></div>
              <div className={Style.ripple}></div>
              <div className={Style.ripple}></div>

              <img src={c01} alt="image" />
            
            </div>

          </div>

          {/* right */}
          <div id="right" className='w-full md:w-1/4 flex flex-col gap-6'>

            <div className='flex text-center items-center place-content-center p-3 sm:p-4 shadow-xl rounded-3xl w-full'>

              <div className='flex text-center items-center place-content-center'>
                <IoChatbubblesOutline className='text-4xl sm:text-5xl text-blue-900'/>
              </div>

              <div className='text-center'>
                <h1 className='lg:text-3xl sm:text-lg mt-3 font-bold'>Networking Opportunities</h1>
              </div>

            </div>

            <div className='text-center items-center place-content-center p-5 sm:p-6 shadow-xl rounded-3xl w-full'>
              <div className='flex items-center justify-center'>
                <FaComputer className='text-4xl sm:text-5xl md:text-6xl text-blue-900'/>
              </div>
              <h1 className='text-xl sm:text-2xl mt-3 font-bold'>Resume Builder</h1>
              <p className='text-gray-500 text-sm sm:text-base mt-2'>Create a professional resume using our built-in resume builder.</p>
              <div className='flex justify-center mt-4 sm:mt-5'>
                <span className='flex w-28 sm:w-32 justify-center bg-blue-500 p-2 sm:p-3 rounded-3xl text-white text-sm sm:text-base'>Build Resume</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Selector