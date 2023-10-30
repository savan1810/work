
'use client'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import React, {  useState, useEffect } from 'react'
import Link from 'next/link';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [handleScroll, sethandleScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                sethandleScroll(true)
            }
            else {
                sethandleScroll(false)
            }
        })
    }, [])
    return (
        <div className={`  z-10 w-full  shadow-md  bg-gray-900 text-white `} style={{}}>
            <div className={` flex items-center  justify-between mx-2 sm:mx-8 lg:mx-14  ${handleScroll === true ? 'h-16' : 'h-[80px]'} }`}>
                <div className='flex justify-center items-center lg:gap-20 md:gap-10 sm:gap-2'>
                    <h1 className='text-2xl  align-middle  tracking-wider font-medium' style={{ color: "" }}><Link href='/'>Success Recruitment Services</Link></h1>
                    <ul className='list-none hidden sm:flex  items-center gap-2 sm:gap-4 md:gap-5 lg:gap-6 cursor-pointer    tracking-wide ' style={{ color: "", lineHeight: "1" }}>
                        {/* <li className='hover:text-purple-200'><Link to="/browse-job">Browse Jobs</Link></li> */}
                        <li className='hover:text-purple-200'><Link href="/find-job">Find Jobs</Link></li>
                    </ul>
                </div>
                <div className=' flex justify-center items-center gap-6 lg:gap-6 md:gap-4 sm:gap-2 '>
                    {/* <button className='border p-2 hidden sm:block rounded-md border-[#E5CFF7]'>Post jobs Free</button> */}
                    <Button 
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon fontSize='large' sx={{ color: grey[300] }}/>
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
                        <MenuItem onClick={handleClose}><Link href='/find-job'>Find Jobs</Link></MenuItem>
                        {/* <MenuItem onClick={handleClose}><Link to='/browse-job'>Browse Job</Link></MenuItem> */}
                        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navbar
