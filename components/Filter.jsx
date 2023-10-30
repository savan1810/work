'use client'

import React,{useState} from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../style/style.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';


const Filter = () => {
    const [postedTime, setPostedTime] = useState("Any time");
    const [pay, setPay] = useState(50000);
    const [type, setType] =useState("full time");
    const [location, setLocation] = useState("remote");
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [alignment, setAlignment] = useState('Relevance');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleTimeChange = (event) => {
        setPostedTime(event.target.value);
        // console.log(postedTime)
    };
    const handlePayChange = (event) => {
        setPay(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className=''>

            <div className='hidden lg:flex mt-16 mb-10  gap-2 justify-center items-center flex-wrap'>
                <ToggleButtonGroup size='small' className='mt-6 w-[300px] sm:w-[180px] md:w-[190px] lg:w-[200px] '
                    color="primary"

                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="Relevance" className='w-[150px] sm:w-[90px] md:w-[95px] lg:w-[100px] '>Relevance</ToggleButton>
                    <ToggleButton value="Newest" className='w-[150px] sm:w-[90px] md:w-[95px] lg:w-[100px] '>Newest</ToggleButton>

                </ToggleButtonGroup>
                <div className='flex flex-col '>
                    <label className=' font-medium '>Posted</label>
                    <FormControl sx={{ my: 1 }} size="small" className='w-[300px] sm:w-[180px] md:w-[190px] lg:w-[200px] '>
                        <Select
                            value={postedTime}
                            onChange={handleTimeChange}
                            displayEmpty

                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="Any time">
                                Anytime
                            </MenuItem>
                            <MenuItem value="Since last visit">Since last visit</MenuItem>
                            <MenuItem value="Since yesterday">Since yesterday</MenuItem>
                            <MenuItem value="In last two days">In last two days</MenuItem>
                            <MenuItem value="In last week">In last week</MenuItem>
                            <MenuItem value="In last 15 days">In last 15 days</MenuItem>
                        </Select>

                    </FormControl>
                </div>
                <div className='flex flex-col'>
                    <label className=' font-medium '>Minimum Pay</label>
                    <FormControl sx={{ my: 1 }} className='w-[300px] sm:w-[180px] md:w-[190px] lg:w-[200px] ' size="small" >
                        <Select
                            value={pay}
                            onChange={handlePayChange}
                            displayEmpty

                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={50000} >
                                $50,000
                            </MenuItem>
                            <MenuItem value={60000}>$60,000</MenuItem>
                            <MenuItem value={70000}>$70,000</MenuItem>
                            <MenuItem value={80000}>$80,000</MenuItem>
                            <MenuItem value={90000}>$90,000</MenuItem>
                            <MenuItem value={100000}>$100,000</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='flex flex-col'>
                    <label className=' font-medium '>Job Type</label>
                    <FormControl sx={{ my: 1 }} className='w-[300px] sm:w-[180px] md:w-[190px] lg:w-[200px] ' size="small"  >
                        <Select
                            value={type}
                            onChange={handleTypeChange}
                            displayEmpty

                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="part time">
                                part time
                            </MenuItem>
                            <MenuItem value="full time">full time</MenuItem>
                            <MenuItem value="temporary">temporary</MenuItem>
                            <MenuItem value="contract">contract</MenuItem>
                            <MenuItem value="internship">internship</MenuItem>
                        </Select>

                    </FormControl>
                </div>
                {/* <div className='flex flex-col'>
                    <label className=' font-medium '>Remote</label>
                    <FormControl sx={{ my: 1 }} className='w-[300px] sm:w-[180px] md:w-[190px] lg:w-[200px] ' size="small"  >
                        <Select
                            value={location}
                            onChange={handleLocationChange}
                            displayEmpty

                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="remote">
                                remote
                            </MenuItem>
                            <MenuItem value="temporary remote">temporary remote</MenuItem>
                        </Select>

                    </FormControl>
                </div> */}
                <div>

                </div>
                <div className='relative'>
                    <button className=' mt-6  rounded-md  text-white  bg-gradient-to-r from-cyan-400 to-blue-400 buttonHover tracking-wider w-[300px] sm:w-[130px] md:w-[140px] lg:w-[150px]  h-10 '>
                        Filter
                    </button>   
                </div>
            </div>
            <div className='block lg:hidden'>
                        <Button className='   bg-blue-300   rounded-full absolute left-[85%]  '
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-blue-200 p-1 rounded-full ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Career Blog</MenuItem>
                            <MenuItem onClick={handleClose}><Link href='/find-job'>Find Job</Link></MenuItem>
                            {/* <MenuItem onClick={handleClose}><Link to='/browse-job'>Browse Job</Link></MenuItem> */}
                            <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                            {/* <MenuItem onClick={handleClose}>Post a Job</MenuItem> */}
                        </Menu>
            </div>
        </div>
    )
}

export default Filter
