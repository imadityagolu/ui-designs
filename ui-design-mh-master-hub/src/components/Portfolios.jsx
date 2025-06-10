import { IoPlayOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import t1 from '../image/t1.png';
import t2 from '../image/t2.png';
import t3 from '../image/t3.png';

function Portfolios() {
    return(
        <>
        {/* portfolio */}
            <div className='mb-20'>
        
              {/* portfolio header */}
              <div className='flex justify-between 
              lg:px-20 lg:mt-20 
              sm:px-10 
              sm:mt-10 
              px-5 mt-5'>
                <div>
                  <h1 className='lg:text-3xl md:text-2xl text-lg mt-3'>Top Talent portfolio Showcase</h1>
                </div>
                <div className='flex mt-3 gap-1'>
                  <a href="" className='bg-gray-300 rounded-2xl p-2 text-blue-800'><FaArrowLeft /></a>
                  <a href="" className='bg-blue-700 rounded-2xl p-2 text-white'><FaArrowRight /></a>
                </div>
              </div>
        
              {/* portfolio image cards */}
              <div className='flex flex-col md:flex-row gap-4 md:gap-5 mt-6 md:mt-8 px-4 md:px-6'>
        
                {/* image 1*/}
                <div
                  className="rounded-2xl w-full h-[500px] bg-cover bg-center inset-shadow-lg"
                  style={{ backgroundImage: `url(${t1})` }}>
        
                {/* porfolio internal ui */}
                <div className='flex justify-around mt-110 ml-5'>
                  <div>
                    <h1 className='text-gray-100 text-xl'>Floyd Miles</h1>
                    <p className='text-gray-100'>Graphics Designer</p>
                  </div>
                  <div>
                    <a href="#" className=''><IoPlayOutline className='text-5xl text-black bg-gray-100 rounded-3xl flex items-center text-center place-content-center p-2' /></a>
                  </div>
        
                </div>
                </div>
        
                {/* image 2*/}
                <div
                  className="rounded-2xl w-full h-[500px] bg-cover bg-center inset-shadow-lg"
                  style={{ backgroundImage: `url(${t2})` }}>
        
                {/* porfolio internal ui */}
                <div className='flex justify-around mt-110 ml-5'>
                  <div>
                    <h1 className='text-gray-100 text-xl'>Brooklyn Simmons</h1>
                    <p className='text-gray-100'>UIUX Designer</p>
                  </div>
                  <div>
                    <a href="#" className=''><IoPlayOutline className='text-5xl text-white bg-blue-500 rounded-3xl flex items-center text-center place-content-center p-2' /></a>
                  </div>
        
                </div>
                </div>
                
                {/* image 3*/}
                <div
                  className="rounded-2xl w-full h-[500px] bg-cover bg-center inset-shadow-lg"
                  style={{ backgroundImage: `url(${t3})` }}>
        
                {/* porfolio internal ui */}
                <div className='flex justify-around mt-110 ml-5'>
                  <div>
                    <h1 className='text-gray-100 text-xl'>Wade Warren</h1>
                    <p className='text-gray-100'>Software Developer</p>
                  </div>
                  <div className=''>
                    <a href="#" className=''><IoPlayOutline className='text-5xl text-black bg-gray-100 rounded-3xl flex items-center text-center place-content-center p-2' /></a>
                  </div>
        
                </div>
                </div>
        
              </div>
        
            </div>
        </>
    )
}

export default Portfolios
