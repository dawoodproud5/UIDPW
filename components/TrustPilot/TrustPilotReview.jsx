import React from 'react'
import Image from 'next/image'
import { AiFillStar } from "react-icons/ai"

function TrustPilotReview() {
    return (
        <div className="w-full min-h-[100vh]  ">
            {/* bg-cover bg-center bg-[url('/Images/blob_bg_2.png')] bg-no-repeat */}
            <div className="w-full min-h-[100vh] font-Inter bg-cover bg-center bg-[url('/Images/daily_ideas_bg_graphic.webp')] flex items-center justify-center flex-col  text-white space-y-6 p-6">
                <div className=" w-full flex flex-col justify-center items-center space-y-2  ">
                    <div className='w-[200px] h-[100px] relative'>
                        <Image src={"/Images/trustpilot.webp"} alt={'image for the truts pilot'} fill></Image>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className=' text-white hover:text-[#00b67a] font-semibold text-base' >5.0 reviews on Trustpilot</p>
                        <p className=' text-white hover:text-[#00b67a] font-semibold text-base' >Based on 684 Reviews</p>
                    </div>

                </div>
                <div className=' w-[90vw] md:w-[80vw] lg:w-[50vw] flex flex-col justify-center items-center text-white gap-12'>
                    <h2 className='xs:text-[30px] md:text-[40px] lg:text-[44px] font-semibold text-center'>What Our Clients Are Saying</h2>
                    {/* text-[#F5812A] */}

                    <div className='flex flex-col justify-center items-center bg-[#eee] w-full gap-2 p-6 rounded-lg box-border '>
                        <p className=' text-blue text-[25px] font-semibold text-center'>Reviews from Trustpilot</p>
                        <div className='flex justify-center items-center text-[#00b67a] gap-1'>
                            <p className='font-bold text-[16px]'>5.0</p>
                            <div className='flex  justify-center items-center'>
                                <AiFillStar size={20} />
                                <AiFillStar size={20} />
                                <AiFillStar size={20} />
                                <AiFillStar size={20} />
                                <AiFillStar size={20} />
                            </div>
                        </div>
                        <div className=' w-full flex flex-col xs:flex-row justify-center items-center gap-2 xs:gap-1 md:gap-4 text-blue '>
                            <p className='text-center font-medium text-[12.8px]'>Would you like to rate us on Trustpilot?</p>
                            <a rel="stylesheet" href="https://www.trustpilot.com/" >
                                <button className=' rounded-md text-base  border border-[#d8d7d7] px-[27px] py-[1px]'>Yes</button>
                            </a>
                        </div>

                        {/* trust pilot review section */}


                        <div className='w-full flex flex-col justify-start items-center gap-6 overflow-y-scroll   p-4 h-[266px] '>
                            <div className=' bg-[#f7f7f7] flex flex-col justify-center items-start text-[black] p-4 space-y-1 rounded-xl shadow-md '>
                                <p className='text-[12px] font-semibold leading-[15.6px]'>Benny</p>
                                <div className='flex justify-center items-center text-[#00b67a]'>
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                </div>
                                <p className='text-[12.8px] font-bold'><strong>Great person to work with!</strong></p>
                                <p className='text-[14px]'>{`"Excellent Ranking against Multiple Keywords. 12th project with Dawood.
                                 His Keywords Research is the most accurate. My content making team has tried numerous YouTube Experts,
                                  But No One matches the competence of Dawood. Thank you so much for helping me in videos rankings and overall YouTube SEO. 
                                  Also, Thank you for your Channel Optimizations, I${"'"}m seeing a tangible growth difference after optimizing my channels."`}
                                </p>
                            </div>

                            <div className=' bg-[#f7f7f7] flex flex-col justify-center items-start text-[black] p-5 space-y-1 rounded-xl shadow-md'>
                                <p>Kevin Martin</p>
                                <div className='flex justify-center items-center text-[#00b67a]'>
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                </div>
                                <p className='text-[12.8px] font-bold'><strong>Highly Recommend Dawood Proud!</strong></p>
                                <p className='text-[14px]'>{`I${"'"}ve been using various youtube growth services for the last few years, 
                            and this is one of the best experiences that I have had. Dawood has done a great job
                             and over-delivered on niche keywords and channel optimization and strategy.
                             I really appreciate that he puts attention to details
                              that I didn${"'"}t even consider as important. Thank you, Dawood. I will use your services again!`}</p>
                            </div>
                            <div className=' bg-[#f7f7f7] flex flex-col justify-center items-start text-[black] p-4 space-y-1 rounded-xl shadow-md '>
                                <p>Vukovic Zelimir</p>
                                <div className='flex justify-center items-center text-[#00b67a]'>
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                </div>
                                <p className='text-[12.8px] font-bold'><strong>Dawood is very Professional...</strong></p>
                                <p className='text-[14px]'>{`"Dawood is very thorough in his work and a valuable asset for any entrepreneur.
                             He shares his knowledge happily. I will be coming back for more help in the near future.
                              Highly recommended."`}</p>
                            </div>
                            <div className=' bg-[#f7f7f7] flex flex-col justify-center items-start text-[black] p-4 space-y-1 rounded-xl shadow-md '>
                                <p>Steve Reimer</p>
                                <div className='flex justify-center items-center text-[#00b67a]'>
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                </div>
                                <p className='text-[12.8px] font-bold'> <strong>Ranked YouTube Video.</strong> </p>
                                <p className='text-[14px]'>{`"Thank you for your service. My YouTube video has ranked. And I got a lot of views and subscribers.
                             Also getting more views. So I will use again. Organic Results"`}</p>

                            </div>

                            <div className=' bg-[#f7f7f7] flex flex-col justify-center items-start text-[black] p-4 space-y-1 rounded-xl shadow-md '>
                                <p>Cynthia Hilditch</p>
                                <div className='flex justify-center items-center text-[#00b67a]'>
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                </div>
                                <p className='text-[12.8px] font-bold'> <strong>Detailed Service</strong> </p>
                                <p className='text-[14px]'>{`"Amazing work I am very pleased with the results. The content strategy make sense and are on-point with what he and I initially discussed.
                             He is very professional and provided fast, quality, detailed service. He seems very passionate about his work.
                             I think he really cares about his clients and their business goals. Looking forward to putting these ideas to work and growing my channel."`}</p>
                            </div>

                            <div className=' bg-[#f7f7f7] flex flex-col justify-center items-start text-[black] p-4 space-y-1 rounded-xl shadow-md '>
                                <p>Sapphire Belle</p>
                                <div className='flex justify-center items-center text-[#00b67a]'>
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                    <AiFillStar size={18} />
                                </div>
                                <p className='text-[12.8px] font-bold'> <strong>Finally found YouTube expert….</strong> </p>
                                <p className='text-[14px]'>{`"I${"'"}m a total novice regarding video optimization and Dawood walked me through what his service entailed. 
                            He has made my video channel far more professional and I am delighted with how it looks now! Look PRO!
                             I couldn${"'"}t recommend this team enough and I will be returning for each subsequent video that I release. I${"'"}m very pleased I found an expert."`}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustPilotReview