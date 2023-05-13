import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { MdVerified } from "react-icons/md"
import { RxUpload } from "react-icons/rx"

import { AiOutlineHeart } from "react-icons/ai"
function InstagramPost({ name, para, likes, img, post, followers, comments }) {
    return (

        <div className='flex flex-col justify-center  mx-auto border-[1px] border-[gray]/40 drop-shadow-xl w-full  rounded-md max-w-md md:-space-y-4' >
            <div className='flex justify-between items-start p-2'  >
                <div className='flex items-center justify-center gap-2'>
                    <div className='relative h-10 w-10  rounded-full'>
                        <Image src={img} alt='logo' className='object-contain rounded-full ' fill />
                    </div>
                    <div className='flex flex-col justify-center items-start -space-y-2'>
                        <div className='flex justify-center items-center gap-1'>
                            <p className='text-sm md:text-base font-semibold text-blue hover:underline'>{name}</p>
                            <MdVerified color='#1d9bf0' size={12} />
                        </div>

                        <p> <span className='text-[gray] text-xs hover:underline '><a href="">{followers} followers</a> </span></p>
                    </div>

                </div>
                <button className='px-3 py-[6px] bg-[#199bf2] font-semibold text-xs text-white rounded-sm mt-2'>View Profile</button>
                {/* <BsThreeDots size={26} color='gray' /> */}
            </div>

            <div className=' w-full '>
                <div className='relative w-[100%] h-[500px] sm:h-[600px] '>
                    <Image src={post} fill className='object-fill sm:object-contain' />
                </div>
            </div>
            <div className='p-2 text-sm font-semibold text-[#2b9eeb] hover:underline'>
                <p className=''>View more on Instagram</p>
                <div className=' px-1'>
                    <hr className='w-full bg-[gray]/50 border-none h-[0.5px] mt-4' />
                </div>
            </div>




            <div>
                <div className='flex flex-col justify-cente'>
                    <div className='flex justify-between items-center  px-2 mt-5'>
                        <div className='flex justify-start items-center space-x-4 '>
                            <svg aria-label="Like" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                            <svg aria-label="Comment" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title>                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            {/* <svg aria-label="Share Post" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg> */}
                            <RxUpload color='rgb(38, 38, 38)' size={24} />
                        </div>
                        <div>
                            <svg aria-label="Save" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </div>
                    </div>
                    <p className='text-[black] font-Syne px-3 text-xs font-medium mt-2 hover:underline'>
                        <span>{likes}</span> likes
                    </p>
                </div>

                <div className='text-blue  flex flex-col justify-center items-center gap-2 font-Syne px-2 my-3 text-xs mt-3'>
                    <p>
                        {para}
                    </p>
                </div>
                {/* <hr className='w-full bg-[gray]/40 border-none h-[0.5px]' /> */}


                <div className='text-[black] font-medium text-[12px] font-Noto px-2 hover:underline'>
                    <div className=' text-xs text-[#2798e4] hover:underline'>
                        <p>
                            www.dawoodproud.com
                        </p>
                        <p>
                            @DawoodProud
                        </p>
                    </div>

                </div>
                <div className='text-[gray] font-medium text-[12px] mt-2 font-Syne px-2 hover:underline'>
                    <p>View all {comments} comments </p>
                </div>
                <hr className='w-full bg-[gray]/40 border-none h-[0.5px] mt-3' />
                <div className='flex justify-between items-center mt-3 p-1'>
                    <p className='text-[12px] text-[gray] font-Inter'>Add a comment...</p>
                    <a href="https://www.instagram.com/" target="_blank">
                        <BsInstagram color='gray' />
                    </a>
                </div>
            </div>

        </div>


    )
}

export default InstagramPost