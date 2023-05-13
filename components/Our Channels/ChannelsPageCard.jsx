import React from 'react'
import Image from 'next/image'

function ChannelCard({ channleURL, ChannelName, para, SectionId, list }) {


    return (
        <div className='flex flex-col justify-center items-center mb-12 font-Inter ' id={SectionId}>
            <div className='flex flex-col justify-start items-center md:items-start text-blue w-full mx-auto space-y-4 font-Inter mt-12 h-full'>
                <h2 className='text-[1.5rem] font-extrabold ml-5 text-[#252626]'>{ChannelName}</h2>
                <div className=' flex flex-col items-start  w-full max-w-[1072px] '>
                    <div className='flex flex-col gap-4 px-8 md:mb-0 md:p-2 text-[1.125rem] leading-[2rem] text-[#252626] font-normal border-1 border-[gray] ml-0 sm:ml-4 text-center md:text-left space-y-2'>
                        <div className='mb-[2rem]'>
                            {para}
                        </div>
                        <div className='ml-12 '>
                            {list}
                        </div>
                    </div>
                </div>
                <div className='relative w-[100%] h-[300px] sm:h-[360px] md:h-[420px] mx-auto px-6 shadow-sm space-y-1 mb-[2.5rem]' >
                    <p>Most-viewed video (regular):</p>
                    {channleURL}
                </div>
            </div>
        </div>
    )
}

export default ChannelCard
