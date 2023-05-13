import Image from 'next/image'
import React from 'react'
import { BsEyeFill } from 'react-icons/bs'
import { FiArrowUpRight } from 'react-icons/fi'
import { IoIosPeople } from 'react-icons/io'
import Link from 'next/link'


const SliderItem = ({ url, name, subs, views, para, link,navtoportfolio }) => {
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center items-center mx-auto font-Inter text-white rounded-2xl p-[12px] sm:p-2 md:p-3 max-w-[22.1875rem] min-h-[498px] bg_testimonials'>
                {/* first group of three items */}
                <div className='flex flex-col items-center space-y-3'>
                    <div className='w-[80px] h-[80px] rounded-full  relative mx-auto overflow-hidden' >
                        <Image src={url} className='object-cover ' fill alt='youtuberImage' />
                    </div>
                    <div className='space-y-1 lg:space-y-2'>
                        <p className='font-extrabold text-testimonial-card-author-sm md:text-testimonial-card-author-md lg:text-testimonial-card-author-lg'>{name}</p>
                        <p className='pt-[2px] pb-1 px-2 bg-white/20 rounded-full inline-block text-[14px] leadiing-[17]'>{link}</p>
                    </div>
                </div>

                {/* 2nd group of the items */}

                <div class="flex justify-between items-center gap-8 mt-4 text-[28px] md:text-[30px] lg:text-[32px]">
                    <div class="flex-1 flex flex-col items-center font-medium space-y-3">
                        <div class="font-bold ">{subs}</div>
                        <div class="text-base flex items-center text-white opacity-75">
                            <svg width="30" viewBox="0 0 30 21" fill="" class="css-0">
                                <path fill="currentColor" fill-opacity=".8" d="M4.5 9a3 3 0 0 0 3-3c0-1.64-1.36-3-3-3a3 3 0 0 0-3 3c0 1.69 1.31 3 3 3zm21 0a3 3 0 0 0 3-3c0-1.64-1.36-3-3-3a3 3 0 0 0-3 3c0 1.69 1.31 3 3 3zm1.5 1.5h-3c-.84 0-1.6.38-2.16.89a6.91 6.91 0 0 1 3.57 5.11h3.09c.8 0 1.5-.66 1.5-1.5v-1.5c0-1.64-1.36-3-3-3zm-12 0a5.27 5.27 0 0 0 5.25-5.25A5.3 5.3 0 0 0 15 0a5.27 5.27 0 0 0-5.25 5.25A5.24 5.24 0 0 0 15 10.5zm3.56 1.5h-.37a7.4 7.4 0 0 1-3.19.75 7.46 7.46 0 0 1-3.23-.75h-.38C8.4 12 6 14.44 6 17.44v1.31C6 20.02 6.98 21 8.25 21h13.5A2.25 2.25 0 0 0 24 18.75v-1.31c0-3-2.44-5.44-5.44-5.44zm-10.45-.61A3.2 3.2 0 0 0 6 10.5H3a3 3 0 0 0-3 3V15c0 .84.66 1.5 1.5 1.5h3.05a6.91 6.91 0 0 1 3.56-5.11z"></path>
                            </svg>
                            <span class="ml-1">subscribers</span>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center font-medium space-y-3">
                        <div class="font-bold ">{views}</div>
                        <div class="text-base flex items-center text-white opacity-75">
                            <svg width="27" viewBox="0 0 27 19" fill="" class="css-0">
                                <path fill="currentColor" fill-opacity=".8" d="M26.81 8.84A15.05 15.05 0 0 0 13.5.5 15.06 15.06 0 0 0 .14 8.84c-.1.19-.14.43-.14.66 0 .28.05.52.14.7 2.53 4.97 7.6 8.3 13.36 8.3a15 15 0 0 0 13.31-8.3c.1-.18.14-.42.14-.65 0-.28-.04-.52-.14-.7zM13.5 16.25a6.75 6.75 0 1 1 6.75-6.75v.05c0 3.7-3.05 6.75-6.75 6.75v-.05zM13.5 5c-.42.05-.84.1-1.22.19.28.37.42.84.42 1.36a2.2 2.2 0 0 1-2.2 2.2c-.52 0-.98-.14-1.36-.42-.1.37-.14.8-.14 1.17a4.5 4.5 0 0 0 9 0 4.46 4.46 0 0 0-4.5-4.45V5z"></path>
                            </svg>
                            <span class="ml-1">views</span>
                        </div>
                    </div>
                </div>

                {/* Group thrid itmes */}
                <div className='flex flex-col flex-1 justify-between items-center h-full overflow-y-auto font-bold text-testimonial-card-quote-sm md:text-testimonial-card-quote-md lg:text-testimonial-card-quote-lg mt-6  '>
                    <div className='font-bold leading-6 text-xl overflow-auto justify-center items-center p-1 '> {para}</div>
                    <div className='flex flex-col justify-center items-center '>
                        <Link href={navtoportfolio}>
                            <button className=' flex justify-center items-center mx-auto px-2 md:px-4 py-[8px] gap-1 rounded-full  drop-shadow-lg  bg-[#139dff] hover:bg-[#3b82f6] duration-200 ' >
                                <p className='font-Inter text-base font-medium '>See Proof</p>
                                <FiArrowUpRight className="text-[20px] text-white" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem


