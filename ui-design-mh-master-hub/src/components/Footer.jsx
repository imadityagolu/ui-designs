import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return(
        <>
    {/* footer */}
    <div className='flex justify-between bg-linear-to-br from-yellow-500 to-yellow-100 w-full
    lg:gap-15 lg:px-25 
    md:gap-5 md:px-10
    px-5 gap-2 pt-8 pb-4'>

      {/* information */}
      <div className='lg:w-110 md:w-80 w-40'>

      {/* info */}
      <div className=''>
        <h1 className='lg:text-4xl md:text-3xl text-xl text-blue-500'>MH.Master Hub</h1>

        <br></br>
        <p className="lg:text-base md:text-base text-sm"><b>Corporate Head Office</b>: 3787 Jerry Dove Drive, Florence, South Carolina, 29501, United States.</p>
        <br></br>

        <p className="lg:text-base md:text-base text-sm"><b>Phone</b>: 843-496-7759</p>
        <br></br>

        <p className="lg:text-base md:text-base text-sm"><b>Fax</b>: 02-222264303</p>
        <br></br>

        <p className="lg:text-base md:text-base text-sm"><b>Email</b>: info@mastershub.com</p>
      </div>

      {/* copyright */}
      <div className='mt-15'>
        <p>©2024 All rights reserved</p>
      </div>

      </div>

      {/* about us */}
      <div className=''>
        <div className=''>
          <h1 className='lg:text-2xl md:text-xl font-bold'>About us</h1>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">Company milestone</p>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">Web mail</p>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">Board of Directors</p>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">Senior Management</p>
          <br></br>
        </div>
      </div>

      {/* others */}
      <div className=''>
        <div className=''>
          <h1 className='lg:text-2xl sm:text-xl font-bold'>Others</h1>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">How it works</p>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">Terms and condition</p>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">Privacy Policy</p>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">About Us</p>
        </div>
      </div>

      {/* others */}
      <div className=''>

        <div className=''>
          <h1 className='lg:text-2xl sm:text-xl font-bold'>Others</h1>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">How it works</p>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">Terms and condition</p>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">Privacy Policy</p>
          <br></br>
          <p className="lg:text-base md:text-base text-sm">About Us</p>
        </div>

        {/* icons */}
        <div className='flex gap-1 lg:mt-23 md:mt-23 mt-50'>
          <FaInstagram className='text-xl'/>
          <FaTelegramPlane className='text-xl'/>
          <AiOutlineTikTok className='text-xl'/>
          <FaYoutube className='text-xl'/>
        </div>

      </div>

    </div>
        </>
    )
}

export default Footer;