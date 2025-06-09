import logo from '../image/logo.png';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { DiDatabase } from "react-icons/di";
import p1 from '../image/p1.png';
import p2 from '../image/p2.png';
import p3 from '../image/p3.png';

function Clients() {
    return (
        <>
            <div className='bg-gray-100 pt-8 md:pt-15'>

              {/* header */}
              <div className='place-content-center items-center text-center px-4 sm:px-6'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl'>
                  We are happy to work with incredible clients
                </h1>
                <p className='mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base text-gray-600'>
                  Fortune 500 companies and renowned global brands place their trust in our products, solutions,
                  <br></br> and bespoke software development services.
                </p>

                {/* icon image */}
                <div className='flex items-center justify-center text-center mt-4 sm:mt-5'>
                  <img src={logo} className='w-150 sm:w-130 md:w-150' alt="Company Logo" />
                </div>

              </div>
              
              {/* image collage */}
              <div className='flex flex-col md:flex-row px-4 sm:px-20 mt-6 sm:mt-8 gap-4 sm:gap-5 justify-center'>

                {/* left box */}
                <div className='w-full md:w-[50%] flex flex-col'>

                  <div>
                    <h1 className='text-2xl sm:text-3xl font-bold'>How It Works</h1>
                  </div>

                  {/* box 1 */}
                  <div className='flex flex-row-reverse sm:flex-row p-3 sm:p-5 gap-3 sm:gap-4'>
                    {/* serial no. */}
                    <div className='flex items-center justify-center text-center'>
                      <h1 className='bg-gray-100 rounded-3xl text-gray-400 text-5xl sm:text-6xl md:text-7xl p-3 sm:p-4'>01</h1>
                    </div>
                    {/* content */}
                    <div className='flex rounded-xl p-3 bg-white shadow-xl gap-2 flex-1'>
                      <div className='flex items-center justify-center'>
                        <FaArrowLeft className='text-blue-400 bg-gray-200 rounded-3xl text-3xl sm:text-4xl md:text-5xl p-2' />
                      </div>
                      <div className='pr-2 sm:pr-3'>
                        <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>Sign Up and Create Account</h1>
                        <p className='text-xs sm:text-sm md:text-base'>Fill out your details and showcase your skills.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* box 2 */}
                  <div className='flex p-3 sm:p-5 gap-3 sm:gap-4'>
                    {/* content */}
                    <div className='flex rounded-xl p-3 bg-white shadow-xl gap-2 flex-1'>
                      <div className='flex items-center justify-center'>
                        <FaArrowUp className='text-orange-400 bg-orange-200 rounded-3xl text-3xl sm:text-4xl md:text-5xl p-2' />
                      </div>
                      <div className='pr-2 sm:pr-3'>
                        <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>Upload Your Portfolio</h1>
                        <p className='text-xs sm:text-sm md:text-base'>Add your resume, videos, and more.</p>
                      </div>
                    </div>
                    {/* serial no. */}
                    <div className='flex items-center justify-center text-center'>
                      <h1 className='bg-gray-100 rounded-3xl text-gray-400 text-5xl sm:text-6xl md:text-7xl p-3 sm:p-4'>02</h1>
                    </div>
                  </div>

                  {/* box 3 */}
                  <div className='flex flex-row-reverse sm:flex-row p-3 sm:p-5 gap-3 sm:gap-4'>
                    {/* serial no. */}
                    <div className='flex items-center justify-center text-center'>
                      <h1 className='bg-gray-100 rounded-3xl text-gray-400 text-5xl sm:text-6xl md:text-7xl p-3 sm:p-4'>03</h1>
                    </div>
                    {/* content */}
                    <div className='flex rounded-xl p-3 bg-white shadow-xl gap-2 flex-1'>
                      <div className='flex items-center justify-center'>
                        <DiDatabase className='text-purple-400 bg-purple-200 rounded-3xl text-3xl sm:text-4xl md:text-5xl p-2' />
                      </div>
                      <div className='pr-2 sm:pr-3'>
                        <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>Get Discovered</h1>
                        <p className='text-xs sm:text-sm md:text-base'>Let employers find and contact you.</p>
                      </div>
                    </div>
                  </div>

                </div>
                
                {/* right box */}
                <div className='w-full md:w-[50%] flex flex-col gap-4'>

                  {/* image box 1 2 */}
                  <div className='flex flex-col sm:flex-row 
                  gap-2 sm:gap-0'>

                    {/* image 1 */}
                    <div className='rounded-2xl w-full bg-cover bg-center inset-shadow-lg h-60
                    sm:w-70 sm:h-64 
                    lg:h-80 lg:w-60' style={{ backgroundImage: `url(${p1})` }}>
                    </div>
                    
                    {/* image 2 */}
                    <div className='rounded-2xl w-full bg-cover bg-center inset-shadow-lg h-100
                    sm:w-80 sm:h-80
                    lg:h-130' style={{ backgroundImage: `url(${p2})` }}>
                    </div>

                  </div>
                  
                  {/* image 3 */}
                <div className='px-0 w-97 lg:w-70 md:w-55 ml-5'>

                  <div className='flex bg-white rounded-3xl p-2 items-center justify-center lg:mt-[-160px] md:mt-[-110px] mt-[-60px] md:h-20'>

                    <div className='rounded-2xl w-24 sm:w-60 md:w-60 h-16 sm:h-21 md:h-[90px] bg-no-repeat bg-size-[100%] bg-center inset-shadow-lg' style={{ backgroundImage: `url(${p3})` }}>
                    </div>

                    <div className='m-3 text-left sm:text-left'>
                      <h1 className='text-blue-500 text-lg sm:text-xl font-bold'>10K+</h1>
                      <p className='text-sm sm:text-base text-gray-400'>Job Seekers</p>
                    </div>
                    
                  </div>
                  </div>

                </div>

              </div>

            </div>
        </>
    )
}

export default Clients;