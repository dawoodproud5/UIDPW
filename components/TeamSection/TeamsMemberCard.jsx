import React from 'react'
import Image from 'next/image'
import { FaAt } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"
import { FaTwitter } from "react-icons/fa"


function TeamsMemberCard({ name, position, bio, imageUrl, site }) {
  return (

    <div className='grid grid-cols-1 w-full  md:max-w-[30vw] lg:max-w-[20vw] p-3 rounded-xl shadow-2xl shadow-[#d2e7f7] font-Inter min-h-[350px]'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <div className="w-[80px] h-[80px] md:w-[70px] md:h-[70px] relative mx-auto ">
          <Image src={imageUrl} fill className='object-contain rounded-full' alt='teammemberimg'
          ></Image>
        </div>
        <div>
          <h3 className='w-full font-bold text-base'>{name}</h3>
          <p className='text-xs font-light '>{position}</p>
        </div>
        <div className='flex flex-col flex-1 h-full justify-between items-center gap-0'>
          <p className=' w-full font-normal text-xs px-6'>{bio}</p>
          <div className='flex'>
            <button className='text-center py-1 px-6 bg-[#139dff]/10 rounded-lg inline-block text-[12px] font-medium'>{site}</button>
          </div>
        </div>
      </div>
    </div>



  )
};

export default TeamsMemberCard



