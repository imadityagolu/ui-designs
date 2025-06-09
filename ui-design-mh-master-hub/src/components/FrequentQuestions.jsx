import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

function FrequentQuestions() {
  
  const [isOpen1, setIsOpen1] = useState(false);
  const toggleContent1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleContent2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);
  const toggleContent3 = () => {
    setIsOpen3(!isOpen3);
  };

  const [isOpen4, setIsOpen4] = useState(false);
  const toggleContent4 = () => {
    setIsOpen4(!isOpen4);
  };


  const [isOpen5, setIsOpen5] = useState(false);
  const toggleContent5 = () => {
    setIsOpen5(!isOpen5);
  };

    return(
        <>
    {/* frequent questions */}
    <div className='py-20'>

      {/* header */}
      <div className='flex justify-between lg:px-25 md:px-20 px-10'>
        <div>
          <h1 className='lg:text-4xl md:text-4xl text-2xl'>Frequently asked Questions</h1>
        </div>
      </div>

      {/* question box */}
      <div className='lg:flex md:flex px-10 mt-5 gap-5 justify-center'>

        {/* left box */}
        <div className='lg:w-[45%] md:w-[45%]'>

          {/* box 1*/}
          <div className='flex border-2 rounded-3xl border-gray-100 p-5 gap-4'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>01</h1>
            </div>

            {/*content*/}
            <div className='flex-1'>
              <h1 className='text-2xl'>How do I create an account on the job board?</h1>

            {isOpen1 && (
              <div className='mt-4'>
                <h1 className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sunt quia unde quos quisquam ducimus totam eum! Ratione, esse quod!
                </h1>
              </div>
            )}

            </div>

            {/*dropdown*/}
            <div>
              <button onClick={toggleContent1}>
              {isOpen1 ? (
                <FaMinus className='text-blue-400 mt-2' />
              ) : (
                <FaPlus className='text-blue-400 mt-2' />
              )}
              </button>
            </div>

          </div>

          {/* box 2*/}
          <div className='flex border-2 rounded-3xl border-gray-100 p-5 gap-4 mt-5'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>02</h1>
            </div>

            {/*content*/}
            <div className='flex-2'>
              <h1 className='text-2xl'>How do I apply for a job through the platform?</h1>
              {isOpen2 && (
              <div className='mt-4'>
                <h1 className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sunt quia unde quos quisquam ducimus totam eum! Ratione, esse quod!
                </h1>
              </div>
            )}
            </div>

            {/*dropdown*/}
            <div>
              <button onClick={toggleContent2}>
              {isOpen2 ? (
                <FaMinus className='text-blue-400 mt-2' />
              ) : (
                <FaPlus className='text-blue-400 mt-2' />
              )}
              </button>
            </div>

          </div>

          {/* box 3*/}
          <div className='flex border-2 rounded-3xl border-gray-100 p-5 gap-4 mt-5'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>03</h1>
            </div>

            {/*content*/}
            <div className='flex-3'>
              <h1 className='text-2xl'>How can I track the status of my job applications?</h1>

              {isOpen3 && (
              <div className='mt-4'>
                <h1 className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sunt quia unde quos quisquam ducimus totam eum! Ratione, esse quod!
                </h1>
              </div>
            )}

            </div>

            {/*dropdown*/}
            <div>
              <button onClick={toggleContent3}>
              {isOpen3 ? (
                <FaMinus className='text-blue-400 mt-2' />
              ) : (
                <FaPlus className='text-blue-400 mt-2' />
              )}
              </button>
            </div>

          </div>

        </div>
        
        {/* right box */}
        <div className='lg:w-[45%] md:w-[45%]'>

          {/* box 4*/}
          <div className='flex border-2 rounded-3xl border-gray-100 p-5 gap-4 bg-blue-200'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>04</h1>
            </div>

            {/*content*/}
            <div className='flex-4'>
              <h1 className='text-2xl'>How do I create an account on the job board?</h1>
              {!isOpen4 && (
              <div className='mt-4'>
                <h1 className='text-lg'>Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use the advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.
                </h1>
              </div>
            )}
            </div>

            {/*dropdown*/}
            <div>
              <button onClick={toggleContent4}>
              {!isOpen4 ? (
                <FaMinus className='text-blue-400 mt-2' />
              ) : (
                <FaPlus className='text-blue-400 mt-2' />
              )}
              </button>
            </div>

          </div>

          {/* box 5*/}
          <div className='flex border-2 rounded-3xl border-gray-100 p-5 gap-4 mt-5'>

            {/*serial no.*/}
            <div>
              <h1 className='bg-gray-100 items-center rounded-4xl text-2xl p-4'>05</h1>
            </div>

            {/*content*/}
            <div>
              <h1 className='text-2xl'>How do I create an account on the job board?</h1>
              {isOpen5 && (
              <div className='mt-4'>
                <h1 className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sunt quia unde quos quisquam ducimus totam eum! Ratione, esse quod!
                </h1>
              </div>
            )}
            </div>

            {/*dropdown*/}
            <div>
              <button onClick={toggleContent5}>
              {isOpen5 ? (
                <FaMinus className='text-blue-400 mt-2' />
              ) : (
                <FaPlus className='text-blue-400 mt-2' />
              )}
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
        </>
    )
}

export default FrequentQuestions;