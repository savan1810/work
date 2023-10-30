'use client'

import React, { useEffect, useState } from 'react'
import '../style/style.css';

const JobList = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        let data = await fetch('http://localhost:3000/api/jobList')
        let parseData = await data.json()
        console.log(parseData)
        setData(parseData)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='  py-10 w-4/5 mx-auto  border rounded-3xl'>
         <h1 className=' px-8 sm:px-20 pb-5 text-2xl font-semibold '>Jobs you might like</h1>
                        <hr className='' />
            {data.map((ele, key) => {
                return (
                    <>
                        <div className='border-b px-8 sm:px-20 py-5 cursor-pointer hover:bg-blue-100 hover:bg-opacity-50'>
                            <p className='text-lg sm:text-xl font-medium mb-5'>{ele.title}</p>
                            <p className='text-base text-gray-400'>
                                <span className='font-medium'>{ele.company}</span> - <span> {ele.location},{ele.posted_time}</span></p>
                            <div className='mt-2 text-gray-700 text-sm sm:text-base'>
                                Already have both html and css code, in need of a skiller person to re-write fresh and new css code that is easy to read but responsive and eye catching. The css code must not be too advanced and must be clean. More details once hired. Please do not respond if you dont have the required skills as this is timely project that needs to be completed as soon as possible.

                                moreabout "Develop a relatively basic but eye-catching css code for a web-page"
                            </div>
                            <button className=' mt-6  rounded-md  text-white  bg-gradient-to-r from-cyan-400 to-blue-400 buttonHover tracking-wider w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px]  h-10 ' >Apply</button>
                        </div>
                        </>

                        )
        })}

                        {/* <div className='flex gap-4 items-center mt-4 flex-wrap'>
                    <p className='bg-gray-200 px-4 py-2 rounded-full '>CSS</p>
                    <p className='bg-gray-200 px-4 py-2 rounded-full '>Wordpress</p>
                    <p className='bg-gray-200 px-4 py-2 rounded-full '>Webdesign</p>
                </div> */}
                       
                        {/* <div className='my-4 '>
                    <span className='text-gray-700'>Proposals</span> :<span className='font-medium'> Less than 5</span>
                </div> */}
                        {/* <div className='flex items-center gap-4 flex-wrap'>
                    <p className='flex gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                        <span>Payment varified</span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <Rating name="read-only" value={4} readOnly />
                        <span>  <span className='font-medium'> $800+</span> spent</span>
                    </p>
                </div> */}
                    
        </div>
    )
}

export default JobList
