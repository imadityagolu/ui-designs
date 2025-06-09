import { CgMail } from "react-icons/cg";

function JoinBoard() {
    return(
        <>
    {/* join board */}
    <div className='text-center place-content-center items-center flex pb-8'>

      {/* header */}
      <div className='bg-linear-to-br from-yellow-500 to-yellow-100 rounded-2xl w-[85%] pt-12 pb-8'>

        <h1 className='lg:text-3xl md:text-3xl text-xl text-center'>Join ambitious professionals and <br></br>unlock your dream career today</h1>

        <p className='text-center mt-5 text-sm lg:text-md md:text-md'>Unlock your true potential and discover a world of opportunities that align <br></br>with your skills, interests, and aspirations</p>

      {/* join us bar */}
      <div className='flex w-full text-center place-content-center items-center mt-8 gap-2'>

        <h1 className='flex lg:w-80 md:w-60 w-50 bg-white p-3 rounded-3xl'>

          <CgMail className='text-2xl' /> Your mail address

        </h1>

        <span className='flex w-25 place-content-center bg-blue-500 p-3 rounded-3xl text-white'>Join us</span>
      </div>

      </div>

    </div>

        </>
    )
}

export default JoinBoard;