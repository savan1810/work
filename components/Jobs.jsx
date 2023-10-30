import Image from 'next/image'
import React from 'react'

const Jobs = () => {
  return (
    <div className='px-10 py-4 rounded-3xl my-10  bg-[#FFE5E5] bg-opacity-40 w-4/5 mx-auto'>
      <p className='mt-10 text-md font-medium'>Browse Popular jobs</p>
      <div className='my-6   grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className='border bg-white cursor-pointer hover:border-purple-300 rounded-lg h-28 flex flex-col justify-center items-center '>
        <Image src='/part-time.svg'  className='mb-2'height='40' width='40' alt=''/>
            <p >Part Time</p>
        </div>
        <div className='border bg-white  cursor-pointer hover:border-purple-300  rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/full-time.svg'  className='mb-2'height='40' width='40' alt=''/>
            <p>Full Time</p>
        </div>
        <div className='border bg-white  cursor-pointer hover:border-purple-300  rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/accounting.svg'  className='mb-2'height='40' width='40' alt=''/>
            <p>Accounting </p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/construction.svg' className='mb-2'height='40' width='40' alt=''/>
            <p>Construction</p>
        </div>
        <div className='border  bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/wfh.svg' className='mb-2'height='40' width='40' alt=''/>
            <p>Work From Home</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/visa-sponsorship.svg' className='mb-2'height='40' width='40' alt=''/>
            <p>Visa Sponsorship</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/nursing.svg' className='mb-2'height='40' width='40' alt=''/>
            <p>Nursing</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300  rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/human-resources.svg' className='mb-2'height='40' width='40' alt=''/>
            <p>Human Resources</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/admin-assistant.svg'  className='mb-2'height='40' width='40' alt=''/>
            <p>Admin Assistant</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/driver.svg' className='mb-2'height='40' width='40' alt=''/>
            <p>Driver</p>
        </div>
        <div className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/pharmacist.svg' className='mb-2'height='40' width='40' alt=''/>
            <p>Pharmacist</p>
        </div>
        <div  className='border bg-white cursor-pointer hover:border-purple-300   rounded-lg h-28 flex flex-col justify-center items-center'>
            <Image src='/sales.svg'  className='mb-2'height='40' width='40' alt=''/>
            <p>Sales</p>
        </div>
      </div>
    </div>
  )
}

export default Jobs
