import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import ze from '../image/ze.png';

function ClientSay() {
    return(
        <>
        {/* client say */}
            <div className='bg-gray-100 py-20'>
        
              {/* what client say */}
              <div className='flex justify-between lg:px-24 md:px-15 px-10'>
                <div>
                  <h1 className='lg:text-4xl md:text-3xl text-2xl'>What our clients say</h1>
                </div>
              </div>
        
              {/* client box */}
              <div className='px-10 
              lg:flex lg:flex-row lg:px-10 mt-5 lg:gap-5 justify-center 
              sm:gap-5 sm:flex 
              md:px-15'>
        
                {/* left box */}
                <div className='bg-gray-800 text-white h-[500px] lg:h-[700px] md:h-[700px] lg:w-[45%] rounded-xl sm:w-full'>
        
                  <div className='flex justify-around mt-5 lg:px-30 md:px-10'><h1 className="mt-5">Manuel Rikob</h1><h1 className="mt-5">CEO of Intel</h1></div>
        
                  <div className='text-center mt-40 lg:mt-50 md:mt-50'>
                    <h1 className='lg:text-3xl md:text-3xl'>Working with Master in me has<br></br> been an incredibly painless and<br></br> enjoyable experience</h1>
                  </div>
        
                  <div className='flex gap-1 place-content-center mt-[15%] sm:mb-20'>
        
                    <a href="" className='bg-gray-300 rounded-3xl p-3 text-blue-800'><FaArrowLeft className='text-2xl'/></a>
        
                    <a href="" className='bg-blue-700 rounded-3xl p-3 text-white'><FaArrowRight className='text-2xl'/></a>
        
                  </div>
        
                </div>
                
                {/* right box */}
                <div
                  className="rounded-2xl bg-cover bg-center h-[700px] lg:w-[45%] sm:w-full"
                  style={{ backgroundImage: `url(${ze})` }}>
                </div>
        
              </div>
        
            </div>
        </>
    )
}

export default ClientSay;