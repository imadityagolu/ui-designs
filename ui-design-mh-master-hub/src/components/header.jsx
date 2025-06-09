import { useState, useEffect } from "react";
import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import img1 from '../image/01.png';
import img2 from '../image/02.png';
import img3 from '../image/03.png';

function Header() {

  // for dropdown menu
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
  };


  // Function to go to the next image
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); // 5 images
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      {/* header */}
      <div className='
      bg-gradient-to-br from-yellow-500 to-yellow-100 
      sm:px-10 md:px-11 lg:px-30 
      sm:py-8 md:py-8 lg:py-8'>

        {/* navbar */}
        <nav className='flex justify-between items-center'>
          
          <h1 className="text-white font-bold
          md:text-3xl lg:text-3xl
          ml-3">MH. Master Hub</h1>

          <div className='hidden md:flex 
          sm:gap-2 md:gap-5 lg:gap-6 
          text-sm md:text-base lg:text-lg'>
            <a href="" className="hover:none sm:text-sm md:text-md lg:text-xl">Create Resume</a>
            <a href="" className="hover:none sm:text-sm md:text-md lg:text-xl">Skillset</a>
            <a href="" className="hover:none sm:text-sm md:text-md lg:text-xl">Partnered Job Board</a>
            <a href="" className="hover:none sm:text-sm md:text-md lg:text-xl">Contact Us</a>
          </div>

          <div className='hidden md:flex rounded-3xl border border-white lg:p-2 md:p-1 text-white hover:bg-white hover:text-black hover:border-white transition-colors'>
            <a href="#" className='flex font-bold lg:gap-2 md:gap-1 md:pl-2 items-center text-sm md:text-xs'>
              Register Now 
              <MdArrowOutward className='text-xl md:text-xl bg-white text-blue-500 rounded-3xl p-1'/>
            </a>
          </div>

          <button 
            className="text-xl md:hidden cursor-pointer transition-transform duration-800 pr-2 mr-1 mt-3" 
            onClick={handleClick}
          >
            {flag ? (
              <div className="border rounded-lg p-1 text-white px-4 py-2 text-2xl transition-transform duration-300">
                X
              </div>
            ) : (
              <div className="border rounded-lg p-2 text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em">
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
            )}
          </button>

        </nav>

        {/* navbar for small screen */}
        {flag && (
          <div className='md:hidden flex flex-col gap-2 mt-3 text-sm transition-transform duration-800 pl-5 pr-9'>
            <a href="" className="m-2 hover:underline">Create Resume</a>
            <a href="" className="m-2 hover:underline">Skillset</a>
            <a href="" className="m-2 hover:underline">Partnered Job Board</a>
            <a href="" className="m-2 hover:underline">Contact Us</a>

            <a href="#" className='m-2 w-full sm:w-48 flex font-bold gap-2 items-center justify-center rounded-3xl border border-white p-3 text-white hover:bg-white hover:text-black hover:border-white transition-colors'>
              Register Now 
              <MdArrowOutward className='text-xl bg-white text-blue-500 rounded-3xl p-1'/>
            </a>
          </div>
        )}

        {/* description */}
        <div className='w-full text-center'>
          <div className='flex w-full items-center mt-4 sm:mt-6 md:mt-8 justify-center'>
            <h1 className='flex w-56 sm:w-72 md:w-80 p-2 bg-white rounded-3xl justify-center text-center items-center text-xs sm:text-sm md:text-base'>
              <FaBagShopping className="mr-2 text-base sm:text-lg md:text-xl" />Your #1 Platform for Skill Sharing
            </h1>
          </div>

          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 text-blue-950 font-bold leading-tight'>
            Showcase Your Mastery.
            <br />
            Get Connected
          </h1>

          <h1 className='mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4'>Create your profile, showcase your skills, and let employers find you.</h1>

          <div className='flex w-full flex-col sm:flex-row text-center justify-center items-center mt-4 sm:mt-6 md:mt-8 gap-2 px-2 sm:px-4'>
            <h1 className='flex w-full sm:w-80 md:w-112 lg:w-120 justify-center bg-white p-2 sm:p-3 rounded-3xl text-xs sm:text-sm md:text-base'>
              <FaSearch className='text-base sm:text-lg md:text-xl items-center mr-2' /> e.g. UX Designer | 
              <FaLocationDot className='text-base sm:text-lg md:text-xl items-center mx-2' /> e.g. Liverpool, USA
            </h1>
            <span className='flex w-20 sm:w-24 md:w-28 justify-center bg-blue-500 p-2 sm:p-3 rounded-3xl text-white text-xs sm:text-sm md:text-base mt-2 sm:mt-0'>Search</span>
          </div>
        </div>

        {/* image slide */}
        <div className="relative w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <div className="relative h-48 sm:h-56 md:h-72 lg:h-96 overflow-hidden rounded-lg">

        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentIndex === 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10">
            <img
            src={img1}
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"
            alt="Slide 1"
          /><img
            src={img2}
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"
            alt="Slide 2"
          /><img
            src={img3}
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"
            alt="Slide 3"
          /><img
            src={img1}
            className="hidden md:block w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"
            alt="Slide 4"
                />
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentIndex === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10">
            <img
            src={img3}
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"
            alt="Slide 2"
          />
          <img
            src={img2}
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"
            alt="Slide 1"
          />
          <img
            src={img1}
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"
            alt="Slide 1"
          />
          <img
          src={img3}
          className="hidden md:block w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"
          alt="Slide 4"
          />
          </div>
        </div>

          </div>
        </div>
        
      </div>

    </>
  );
}

export default Header;