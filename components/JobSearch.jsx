
// import React,{useState} from 'react'
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { purple, red } from '@mui/material/colors';
// import BrowseJobs from './BrowseJobs';
// import { Country ,City} from 'country-state-city';
// import {countries} from 'country-data';
// import { countryToAlpha2, countryToAlpha3 } from "country-to-iso";




// const JobSearch = () => {

//   const [manufacturer1, setManufacturer1] = useState('')
//   const [manufacturer2, setManufacturer2] = useState('')
//   const [manufacturer4, setManufacturer4] = useState('')
//   const [manufacturer3, setManufacturer3] = useState('')


//   const [inputValue1, setInputValue1] = useState('');
//   const [inputValue2, setInputValue2] = useState('');
//   const [inputValue3, setInputValue3] = useState('');

//   const handleSearch=()=>{
//     console.log(manufacturer1,manufacturer2)
//     setManufacturer1('')
//     setManufacturer2('')
//     setManufacturer3('')
//   }

//   const JobArray = ["Web developer","Front-end developer","Mobile-app developer","Game-developer","Back-end developer","Embedded system engineer","Data engineer","DevOps engineer","Software Quality Assurance(QA) engineer"];

//   const top100Films = [
   
//     { title: 'Interstellar', year: 2014 },
//     { title: 'Casablanca', year: 1942 },
//     { title: 'City Lights', year: 1931 },
//     { title: 'Psycho', year: 1960 },
//     { title: 'The Green Mile', year: 1999 },
//     { title: 'The Intouchables', year: 2011 },
//     { title: 'Modern Times', year: 1936 },
//     { title: 'Raiders of the Lost Ark', year: 1981 },
//     { title: 'Rear Window', year: 1954 },
//     { title: 'The Pianist', year: 2002 },
//     { title: 'The Departed', year: 2006 },
//     { title: 'Terminator 2: Judgment Day', year: 1991 },
//     { title: 'Back to the Future', year: 1985 },
//     { title: 'Whiplash', year: 2014 },
//     { title: 'Gladiator', year: 2000 },
//     { title: 'Memento', year: 2000 },
//     { title: 'The Prestige', year: 2006 },
//     { title: 'The Lion King', year: 1994 },
//     { title: 'Apocalypse Now', year: 1979 },
//     { title: 'Alien', year: 1979 },
//     { title: 'Sunset Boulevard', year: 1950 },
    
//   ];
//   return (
//     <div className=' mx-auto mt-20 '>

//       <div className='flex items-center justify-center flex-wrap gap-4 '>
//       <div>

// <label className=' font-semibold '>Keyword</label>
// <Autocomplete color="success" className='w-[270px]   md:w-[235px] lg:w-[270px]'
// value={manufacturer1}
//   onChange={(event, newValue) => {
//     setManufacturer1(newValue);
//   }}
//   inputValue={inputValue1}
//   onInputChange={(event, newInputValue) => {
//     setInputValue1(newInputValue);
//   }}
//   id="free-solo-demo "
//   freeSolo 
//   sx={{ width: "270px",my:1 }}
//   options={ JobArray.map((option) => 
//      option
//   )}
//   renderInput={(params) => <TextField padding={4} {...params} sx={{ "& fieldset": { borderColor: purple[400], p: "2px" } }} color="secondary" placeholder="Job title,Skills or Employer name" />}
// />
// </div>
// <div>

// <label className=' font-semibold '>Country</label>
// <Autocomplete color="success" className='w-[270px] disabed  md:w-[235px] lg:w-[270px]'
// value={manufacturer3}
//   onChange={(event, newValue) => {
//     setManufacturer4(countryToAlpha2(newValue));
//     setManufacturer3(newValue);
//   }}
//   inputValue={inputValue3}
//   onInputChange={(event, newInputValue) => {
//     setInputValue3(newInputValue);
//   }}
//   id="free-solo-demo "
//   freeSolo 
//   sx={{ width: "270px",my:1 }}
//   options={ Country.getAllCountries().map((option) => 
//      option.name
//   )}
//   renderInput={(params) => <TextField padding={4} {...params} sx={{ "& fieldset": { borderColor: purple[400], p: "2px" } }} color="secondary" placeholder="Country" />}
// />
// </div>
// <div>

// <label className=' font-semibold '>City</label>
// <Autocomplete color="success" className='w-[270px]  md:w-[235px] lg:w-[270px]'
//   value={manufacturer2}
//   onChange={(event, newValue) => {
//     setManufacturer2(newValue);
//   }}
//   inputValue={inputValue2}
//   onInputChange={(event, newInputValue) => {
//     setInputValue2(newInputValue);
//   }}
//   id="free-solo-demo "
//   freeSolo
//   sx={{ width: "270px",my:1 }}
//   options={City.getCitiesOfCountry(manufacturer4).map((option) => option.name)}
//   renderInput={(params) => <TextField padding={4} {...params} sx={{ "& fieldset": { borderColor: purple[400] } }} color="secondary" placeholder="City" />} />
// </div>

//         <button className=' mt-6 hidden sm:block lg:block rounded-md  text-white bg-gradient-to-r from-[#B931FC] to-[#FF6AC2] tracking-wide w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px]  h-14 ' onClick={handleSearch}>Find a Job</button>

//       </div>
//       <div className='block sm:hidden lg:hidden w-full text-center'>

//       <button className=' mt-6  rounded-md  text-white bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide w-[270px]  h-14 ' onClick={handleSearch}>Find a Job</button>
//       </div>

//       <BrowseJobs/>
//     </div>
//   )
// }

// export default JobSearch

