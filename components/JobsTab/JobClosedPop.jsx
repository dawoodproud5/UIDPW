import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai"

export default function SimplePopper({ desc, status }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <button aria-describedby={id} type="button" onClick={handleClick}
                className="border border-indigo-500 text-[12px] md:text-[14px] bg-[black] text-white rounded-md  px-3 md:px-3 py-2 sm:py-2 md:py-2 md:m-0  mx-auto focus:outline-none focus:shadow-outline shadow-lg">
                {status}
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl} placement="top">
                <Box className="p-2 sm:p-5 flex justify-center items-center m-auto bg-[#00438b] text-white rounded-md w-[200px] sm:w-[250px] h-[70px] sm:h-[100px] drop-shadow-lg  ">
                    <AiOutlineClose className='absolute top-1 right-1 font-bold' onClick={handleClick} />
                    <p>{desc} 🤗</p>
                </Box>
            </Popper>
        </div>
    );
}

