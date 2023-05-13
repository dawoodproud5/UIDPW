import React from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';

function SuperchargeYT() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center font-Inter   bg-cover bg-center bg-[url('/Images/calltoaction.webp')] ">
            <div className="w-full  max-w-[1172px] m-auto flex flex-col  gap-14 md:gap-10 lg:gap-12 justify-center items-center ">
                <Image src="/Images/logo.png" width={80} height={60} alt="logo-image" className='object-contain'></Image>
                <div className='flex flex-col justify-center items-center w-[80vw] sm:w-[80vw]  text-center md:gap-6'>
                    <h1 className="w-full text-center text-xl sm:text-2xl md:text-4xl text-white font-black font-Inter px-4 ">Supercharge your YouTube Channel Today</h1>
                    <h2 className='text-[white]/70 text-[16px] md:text-[22px] lg:text-[24px] font-medium font-Inter px-4'>Stand Out from Crowd — Dawood Proud </h2>
                </div>

                <button className='flex justify-center items-center px-5 py-3 rounded-full bg-[#139DFF] hover:bg-[#3b82f6] text-white font-bold gap-2'>
                    <Link href={"/cutomerpage"}>Start a New Project</Link>
                    <svg fill="none" viewBox="0 0 20 21" width="20" class="css-orecyf">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SuperchargeYT
