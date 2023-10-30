// import React from 'react'
// import '../style/style.css';
// import { Link } from 'react-router-dom';

// const BrowseJobs = () => {
//     return (
//         <div className='bg-[#E4F1FF] bg-opacity-60 w-full '>
//             <div className='w-3/4 mx-auto py-6 my-20 '>
//                 <p className='text-2xl font-bold tracking-wider'>Browse Jobs</p>
//                 <p className='text-lg my-3 font-medium tracking-wide'>By Company</p>
//                 <div className='mt-5 text-lg text-blue-500 flex items-center flex-wrap'>
//                     <Link href='' className='mr-2  hover:border-b-2 hover:border-[#00A9FF]'>A</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>B</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>C</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>D</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>E</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>F</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>G</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>H</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>I</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>J</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>K</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>L</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>M</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>N</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>O</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>P</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>Q</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>R</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>S</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>T</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>U</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>V</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>W</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>X</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>Y</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>Z</Link>
//                     <Link href='' className='mr-2 hover:border-b-2 hover:border-[#00A9FF]'>ALL</Link>
//                 </div>
//                 <p className='text-lg mt-5 mb-3 font-medium tracking-wide'>By Provience</p>
//                 <div className='mt-5 text-lg text-blue-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
//                     <div className='flex flex-col justify-center gap-3  '>
//                         <Link href='' ><span className='relative provience_trans'>Alberta</span></Link>
//                         <Link href=''><span className='relative provience_trans'>British Columbia</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Manitoba</span></Link>
//                         <Link href=''><span className='relative provience_trans'>New Brunswick</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Newfoundland And Labrador</span></Link>
//                     </div>
//                     <div className='flex flex-col justify-center gap-3 mt-3 sm:mt-2 lg:mt-0'>
//                         <Link href=''><span className='relative provience_trans'>Northwest Territories</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Nova Scotia</span></Link>
//                         <Link href=''><span className='relative provience_trans'><Link href=''><span className='relative provience_trans'>Newfoundland And Labrador</span></Link>
//                         </span></Link>
//                         <Link href=''><span className='relative provience_trans'>Ontario</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Prince Edward Island</span></Link>
//                     </div>
//                     <div className='flex flex-col justify-center gap-3 mt-3 sm:mt-2 lg:mt-0'>
//                         <Link href=''><span className='relative provience_trans'>Quebec</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Saskatchewan</span></Link>
//                         <Link href=''><span className='relative provience_trans'>                        <Link href=''><span className='relative provience_trans'>Newfoundland And Labrador</span></Link>
//                         </span></Link>
//                         <Link href=''><span className='relative provience_trans'>Yukon Territory</span></Link>
//                     </div>
//                 </div>
//                 <p className='text-lg mt-5 mb-3 font-medium tracking-wide'>By Job Function</p>
//                 <div className='mt-5 text-lg text-blue-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>

//                     <div className='flex flex-col justify-center gap-3 '>
//                         <Link href='' ><span className='relative provience_trans'>Accounting and Finance</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Administrative and Clerical
//                         </span></Link>
//                         <Link href=''><span className='relative provience_trans'>Arts, Media and Entertainment</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Customer Service
//                         </span></Link>
//                         <Link href=''><span className='relative provience_trans'>Engineering</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Environmental</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Financial Services</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Healthcare Services and Wellness</span></Link>
//                     </div>
//                     <div className='flex flex-col justify-center gap-3  mt-3 sm:mt-2 lg:mt-0'>
//                         <Link href=''><span className='relative provience_trans'>Hospitality and Food Service
//                         </span></Link>
//                         <Link href=''><span className='relative provience_trans'>Human Resources and Recruitment</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Insurance</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Legal</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Manufacturing</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Marketing</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Operations</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Project Management and Business Analysis</span></Link>
//                     </div>
//                     <div className='flex flex-col justify-center gap-3  mt-3 sm:mt-2 lg:mt-0'>
//                         <Link href=''><span className='relative provience_trans'>Retail In-Store</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Sales and Business Development</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Science and Research</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Security and Surveillance</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Skilled Trades and Labour
//                         </span></Link>
//                         <Link href=''><span className='relative provience_trans'>Supply Chain and Logistics</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Technology and Digital Media</span></Link>
//                         <Link href=''><span className='relative provience_trans'>Training and Education</span></Link>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default BrowseJobs
