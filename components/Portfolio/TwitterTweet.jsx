import React from 'react'
// import * as Icons from '../../Svg/Icons'
import { TwitterIcon } from '../../Svg/TwitterIcon'
import Image from 'next/image'
import { AiFillHeart } from "react-icons/ai"
import { TbMessageCircle2Filled } from "react-icons/tb"
import { BsTwitter } from "react-icons/bs"
import { HiOutlineInformationCircle } from "react-icons/hi"
function TwitterTweet({ name, username, img, text, date, likes, read }) {


    return (
        <div>
            <div className='flex flex-col max-w-[400px] mx-auto border-[1px] border-[gray]/40 shadow-xl p-4  rounded-xl'>
                <div className='flex justify-between items-start'  >
                    <div className='flex items-center justify-center gap-1'>
                        <div className='relative h-10 w-10  rounded-full'>
                            <Image src={img} alt='logo' className='object-contain rounded-full' fill />
                        </div>
                        <div className='flex flex-col justify-center items-start -space-y-2'>
                            <p className='text-sm md:text-base font-semibold text-blue'>{name}</p>
                            <div className='flex justify-center items-center gap-2'>
                                <p className='text-[gray]/90 text-sm'>{username} </p>
                                <p className='font-bold text-lg mb-1 text-[gray]'>. </p>
                                <p><span className='text-[#1d9bf0] text-sm font-bold hover:underline'><a href="https://www.instagram.com/accounts/login/">Follow</a> </span></p>
                            </div>

                        </div>
                    </div>
                    <BsTwitter size={26} color='#1d9bf0' />
                </div>
                <div className='text-blue p-2 flex flex-col justify-start items-start gap-2 font-Syne'>
                    <p>
                        {text}
                    </p>
                    <div className='flex justify-between items-center w-full text-sm'>
                        <div className='text-[gray]'>
                            {date}
                        </div>
                        <div>
                        <HiOutlineInformationCircle size={15}/>
                        </div>


                    </div>
                    <hr className='w-full bg-[gray]/50 border-none h-[0.5px]' />
                </div>
                <div className='flex justify-around items-center font-bold text-[12px] md:text-[14px] text-[#536471]'>
                    <div className='flex justify-center items-center gap-3  hover:text-[#f91880] hover:underline ' >

                        <div className="" >
                            <svg
                                viewBox="0 0 24 24"
                                fill="#f91880"
                                height="22px"

                            >
                                <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                            </svg>
                        </div>
                        <p>{likes}</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 hover:text-[#1d9bf0] hover:underline  '>
                        <div className='items-center '>
                            <svg viewBox="0 0 24 24" fill="#1d9bf0" height="22"><g>
                                <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"></path>
                            </g></svg>
                        </div>
                        <p className='text-base'>Reply</p>
                    </div>
                    <div className='flex justify-center items-center gap-3  hover:text-[#00BA7C] hover:underline '>
                        <div className=''>
                            <svg viewBox="0 0 24 24" fill="rgb(38, 38, 38)" height="22" ><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
                        </div>
                        <p>Share</p>
                    </div>
                </div>
                <div className='p-1  w-full border-[0.5px] border-[gray]/70 rounded-full mx-auto mt-3 text-[#006fd6] text-center font-bold text-[14px] hover:bg-[#006fd61a]'>
                    <p>Read {read} Reply</p>
                </div>
            </div>

        </div>
    )
}

export default TwitterTweet
{/* <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"></path> */ }