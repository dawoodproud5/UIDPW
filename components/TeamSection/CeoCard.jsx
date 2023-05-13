import React from 'react'
import Image from 'next/image'
// import { FaAt } from "react-icons/fa"
// import { AiFillLinkedin } from "react-icons/ai"
// import { FaTwitter } from "react-icons/fa"


function CEOCard({ name, position, bio, imageUrl }) {
    return (

        <div className='grid grid-cols-1 md:grid-cols-12 justify-center items-center mx-auto max-w-[900px] mb-12 md:ml-[15%]'>
            <div className="w-[190px] sm:w-[180px] h-[200px] sm:h-[180px] relative md:col-span-3 mx-auto">
                <Image src='/Images/TeamMembers/CEO/ceodawoodproud3.jpg' fill className='object-contain rounded-full' alt='CEO_Img'></Image>
            </div>

            <div className='flex flex-col items-center md:items-start px-6 py-2 md:col-span-8'>
                <div className='flex flex-col items-center md:items-start mx-auto sm:mx-0 '>
                    <h3 className='w-full font-semibold text-xl md:text-2xl'>{name}</h3>
                    <p className='text-base md:text-base font-light '>{position}</p>
                </div>
                <p className='font-normal text-base md:text-base text-center sm:text-left p-5 sm:p-0 '>{bio}</p>
            </div>


        </div>

    )
};

export default CEOCard


