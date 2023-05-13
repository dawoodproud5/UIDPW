import React from 'react'
import Image from 'next/image'
import TwitterTweet from './TwitterTweet'
import InstagramPost from './InstagramPost'
function PorftfoliCard({ image, ChannelName, para, tweet, SectionId }) {


    return (
        <div className='flex flex-col justify-center items-center mt-12 ' id={SectionId}>
            <div className='flex flex-col justify-center items-center text-blue w-full mx-auto space-y-4 md:space-y-10 font-Inter mt-5 h-full'>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold abdal_color'>{ChannelName}</h2>
                <div className=' flex flex-col items-start lg:grid  lg:grid-cols-[1fr_1fr] w-full max-w-[1072px] '>
                    <div className='px-8  mb-6 md:mb-0 md:p-2 text-sm md:text-base lg:text-lg drop-shadow-lg border-1 border-[gray] ml-0 sm:ml-4 text-center md:text-left'>
                        {para}
                    </div>
                    <div className='p-4'>
                        {tweet}
                    </div>

                </div>
                <div className='relative w-[90%] h-[300px] sm:h-[300px] md:h-[580px] ' >
                    <Image src={image} fill alt='channelanalytics' className='object-contain drop-shadow-sm' />
                </div>
            </div>

        </div>
    )
}

export default PorftfoliCard
