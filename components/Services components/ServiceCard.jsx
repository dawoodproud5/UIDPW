import React from 'react'
import Image from 'next/image';
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';
import { style } from '@mui/system';
import { Fade } from 'react-awesome-reveal';



function ServiceCard({ heading, heading2, para, btntext, bgColor, link, images }) {

    return (
        <div className={`w-full min-h-[100vh] font-Inter text-white relative ${bgColor}`}>
            <div className="w-full p-2 mt-6 md:mt-0">
                <div className="w-full max-w-[1172px]  flex flex-col items-center justify-center  mx-auto gap-3 md:gap-8 mt-12">
                    <h2 className=' max-w-auto md:max-w-[580px] font-extrabold text-[28px] md:text-[38px] lg:text-[38px] text-center  '>{heading}</h2>
                    <div className='flex flex-col md:flex-row justify-center md:justify-center md:items-center '>
                        <div className='flex-1 mb-6 md:mb-0 p-2 sm:p-6 md:p-2'>
                            <Fade delay={100} direction="left" ssrFadeout >
                                <div className='w-full h-[300px] md:h-[400px] relative drop-shadow-2xl '>
                                    <Image src={images} alt="" fill className='object-contain '></Image>
                                </div>
                            </Fade>
                        </div>

                        <div className='w-full flex-1 '>
                            <div className='px-[5%] md:pl-[15%] md:pr-[7%] space-y-5 flex flex-col justify-center !items-center md:items-start'>
                                <h3 class="font-extrabold text-[24px] md:text-[30px] lg:text-[32px] text-center md:text-left leading-[43px]">{heading2}</h3>
                                <p className='text-[#BCBCBC] font-normal text-[16px] md:text-[17px] lg:text-[18px] text-center md:text-left leading-[25px]'>{para}</p>
                                <div className=' self-center md:self-start'>
                                    <Link rel="stylesheet" href={`${link}`}>
                                        <button className='flex justify-center items-center font-bold mt-1 px-2 sm:px-4  py-2 sm:py-3 gap-1  sm:gap-2 rounded-full text-xs sm:text-base bg-[#139DFF] hover:bg-[#3b82f6]'>
                                            {btntext}
                                            <svg fill="none" viewBox="0 0 20 21" width="20" class="css-orecyf">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ServiceCard;

