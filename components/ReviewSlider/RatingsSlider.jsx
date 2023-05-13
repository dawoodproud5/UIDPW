import Image from 'next/image';
import React from 'react'
import Rating from '@mui/material/Rating';
import * as Icons from '../../Svg/Icons'
import RatingSliderItem from './RatingSliderItem';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { AiFillStar } from "react-icons/ai"
import "swiper/css";
import "swiper/css/navigation";


// &quot;
// &#39;

const ReviewSlider = () => {
    const ReviewData = [
        {
            "ImgUrl": "/Images/ReviewSliderImg/IaPAvm-unfBV0OiBe7H1iovfZ6PQ7tMBTfepE=s32-c-mo.png",
            "name": "Aleena Rais",
            "months": "2 months ago",
            "para": (
                <p> &quot;If you&#39;re looking for fresh and exciting YouTube content ideas,
                    I highly recommend checking out this service.As a YouTuber with 3 millions+
                    subscribers, I know how challenging it can be to come up with new and engaging
                    content that keeps your audience interested.But this service has been a lifesaver for me,
                    providing me with tailored content ideas that resonate with my niche and target audience.
                    I&#39;ve seen a significant growth in my channel&#39;s engagement and viewership since I started using their service,
                    and I&#39;m excited to see where it takes me in the future. So if you&#39;re ready to take your YouTube game to the next level,
                    definitely give this service a try!&quot; </p>
            )
        },
        {
            "ImgUrl": "/Images/ReviewSliderImg/IaPAvm-unfBV0OiBe7HCiovfZ6PQ7tMBTfepE=s32-c-mo.png",
            "name": "Cathy Yoder ",
            "months": "5 days ago",
            "para": (
                <p> Growing a YouTube channel can be a real challenge, and sometimes you just need a little help to get you on the right track.
                    That&#39;s where Dawood comes in. He provided me with a comprehensive YouTube content strategy that really helped me to grow my
                    channel and reach a wider audience. His insights and recommendations were incredibly valuable, and I can honestly say that
                    I wouldn&#39;t be where I am today without their help. Dawood is an absolute pro when it comes to YouTube content strategy, and
                    I can guarantee that you won&#39;t be disappointed with the results. Thanks again Dawood, you&#39;re the best!</p>
            )
        },
        {
            "ImgUrl": "/Images/ReviewSliderImg/IaPAvm-unfBV0OiBe7H3iovfZ6PQ7tMBTfepE=s32-c-mo.png",
            "name": "Kallie Branciforte ",
            "months": "a months ago",
            "para": (
                <p> I&#39;ve been working with Dawood Proud Agency for a few months now, and I can honestly say that they have helped me grow my channel in ways I never thought possible.
                    Their team really knows their stuff when it comes to optimizing videos for search results, and they were able to get my videos ranking higher than ever before.
                    Not only that, but they also provided me with invaluable advice and strategies for creating content that resonates with my audience. Overall, I can&#39;t recommend
                    Dawood Proud Agency enough for anyone looking to take their YouTube channel to the next level. Thanks to their expertise and guidance, I&#39;ve been able to reach
                    new viewers and build a community of dedicated fans. If you&#39;re serious about growing your channel, definitely check them out!</p>
            )
        },
        {
            "ImgUrl": "/Images/ReviewSliderImg/IaPAvm-unfBV0OiBe7H1iovfZ6PQ7tMBTfepE=s32-c-mo.png",
            "name": "미스터 프로세스",
            "months": "3 weeks ago",
            "para": (
                <p> As a YouTuber, finding the right niche can be a daunting task, but Dawood and his team made it incredibly easy for me. Their YouTube
                    Niche Selection Services helped me find a low competition and high volume niche that was perfect for my channel. Not only did they
                    help me with niche selection, but they also assisted me in creating my channel. They provided me with valuable insights and guidance
                    that allowed me to make informed decisions about my channel&#39;s content and branding. Thanks to Dawood and his team, my channel has seen
                    tremendous growth, and I couldn&#39;t be happier with the results.</p>
            )
        },
        {
            "ImgUrl": "/Images/ReviewSliderImg/IaPAvm-unfBV0OiBe7HSiovfZ6PQ7tMBTfepE=s32-c-mo.png",
            "name": "Samina J",
            "months": "3 months ago",
            "para": (
                <p> Hey guys, it&#39;s your favorite foodie YouTuber and today I wanted to share feedback with you all how Dawood Proud Agency has helped me take
                    my channel to the next level! Not only did they guide me on how to create delicious Pakistani and Indian cuisine videos, but they also encouraged
                    me to branch out and showcase the flavors of Arabic, Turkish and English cooking. Their expert advice on sharing the best tricks and hacks of cooking
                    has not only made my videos more engaging but has also helped me grow my channel exponentially. Thanks to Dawood Proud Agency, I was able to quit my
                    9 to 5 job and pursue my passion full-time. If you&#39;re a foodie looking to take your YouTube channel to new heights, then I highly recommend working
                    with the amazing team at Dawood Proud Agency!</p>
            )
        },
        {
            "ImgUrl": "/Images/ReviewSliderImg/IaPAvm-unfBV0OiBe7HLiovfZ6PQ7tMBTfepE=s32-c-mo.png",
            "name": "Lanxofour ",
            "months": "6 days ago",
            "para": (
                <p> As a gaming enthusiast, I was really interested in creating Minecraft related content and tutorials, but I had no idea where to start. That&#39;s when I stumbled
                    upon DP Agency, and they provided me with invaluable guidance and support every step of the way. Their expertise in the gaming industry and understanding of
                    YouTube&#39;s algorithm really helped me grow my channel and reach a wider audience. Thanks to DP Agency, I&#39;m well on my way to becoming a successful YouTuber
                    and I couldn&#39;t be happier with the results. If you&#39;re thinking about starting a YouTube channel or just need some guidance on how to grow your existing one,
                    I highly recommend DP Agency. Thanks again for everything, guys!</p>
            )
        },


    ]
    return (
        <div className='w-full flex flex-col items-center justify-start p-8 sm:p-6'>
            <div className='w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid:cols-3 xl:grid-cols-4 gap-5'>
                {/* left portion */}
                <div className="w-full h-full flex font-Halvic rounded-lg p-2 md:p-1 mx-auto bg-white ">
                    <div className='w-full h-full grid grid-cols-[40%_60%] justify-center items-start  p-1 md:p-2 lg:p-4 mx-auto '>
                        <div className='h-12 w-12 relative ml-5  '>
                            <Image src={'/Images/logo.png'} alt="" fill className='object-contain rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-start'>
                            <p className='font-bold font-Inter text-lg'>Dawood Proud</p>
                            <div className='flex justify-center items-center'>
                                <p className='text-[#e7711b] font-bold text-lg'>4.9</p>
                                <div className='flex flex-wrap justify-start items-center text-[#e7711b]'>
                                    <AiFillStar size={23} />
                                    <AiFillStar size={23} />
                                    <AiFillStar size={23} />
                                    <AiFillStar size={23} />
                                    <AiFillStar size={23} />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-start gap-2'>
                                <p className='text-[gray]'>Based on 521 reviews</p>

                                <div className='relative  h-[20px] w-[130px]'>
                                    <Image src={'/Images/poweredByGoogle.webp'} alt='googleimg' className='object-contain' fill />
                                </div>

                                <a href="https://accounts.google.com/signup" target="_blank">
                                    <button className=' flex gap-1 text-white shadow-lg items-center justify-center bg-[#1c62e4] hover:bg-[#064bcd] duration-200 py-[2px] px-4 md:px-3 lg:px-4 rounded-3xl '>
                                        review us on
                                        <Icons.GoogleIcon ClassName='bg-white rounded-full' />
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* sldier tiems here */}
                <div className='w-full col-span-[50%] sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 flex flex-col items-center justify-start'>
                    <Swiper
                        speed={2000}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        // Pagination={true}
                        // modules={[Pagination]}
                        Autoplay={true}

                        // pagination={{
                        //     pagination: true,
                        // }}
                        slidesPerView={1}
                        spaceBetween={40}
                        breakpoints={{
                            480: {

                                slidesPerView: 1,
                                spaceBetween: 20,

                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },

                        }}
                        loop={true}
                        modules={[Autoplay, Pagination]}
                        className="MyRatingSlider"
                    >
                        {ReviewData.map((data, index) => {
                            return <SwiperSlide key={index}> <RatingSliderItem ImgUrl={data.ImgUrl} name={data.name} months={data.months} para={data.para} /></SwiperSlide>

                        })}



                    </Swiper>
                </div>
            </div>
        </div>




    )
}





export default ReviewSlider;