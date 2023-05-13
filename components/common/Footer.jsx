import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiYoutubeLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
    return (
        <div className='w-full  text-white bg-[#121521] text-base overflow-x-hidden font-Inter'>
            {/* parent div */}
            <div className="page-section-container max-w-[1172px] px-6 md:px-4 md:mx-auto pt-24 md:pt-24 pb-10 grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-full mb-7 md:mb-8">
                    <div className='relative h-14 w-14 flex items-center justify-center rounded-full shadow-xl'>
                        <Image src={'/Images/logo.png'} alt='logbimg' fill className='object-contain' />
                    </div>
                </div>
                {/* <div className="col-span-full mb-7 md:mb-8"></div> */}
                <div className="col-span-full md:col-span-3 flex flex-col">
                    <div class="font-medium  mb-8 md:mb-12 text-left ">
                        Our mission at Dawood Proud is to help YouTube creators and businesses stand out from the Crowd.
                        We provide customized services to help our clients gain views, engaged subscribers,
                        and loyal audiences. With our support, our clients do achieve success and become leaders in their niches.
                    </div>
                    <div class="font-normal mt-8 w-full">
                        © 2023 Dawood Proud <br /> All Rights Reserved
                    </div>
                </div>
                <div className="col-span-full md:col-span-6 mt-8 md:mt-0 text-md">
                    <div class="flex flex-col md:flex-row w-full space-y-7 md:space-y-0 space-x-0 md:space-x-2 lg:space-x-10 md:pl-10">
                        <div>
                            <div class="mb-4 sm:mb-3 font-bold">
                                Company
                            </div>
                            <div class="flex flex-col items-start space-y-3  text-white text-opacity-60">
                                <Link href={"/Our-Channels"}>Our Channels </Link>
                                <Link href={"/portfolio"}>Portfolio</Link>
                                <Link href={"/blog"}>Blog</Link>
                            </div>
                        </div>
                        <div>
                            <div class="mb-4 sm:mb-3 font-bold">
                               Services
                            </div>
                            <div class="flex flex-col items-start space-y-3 text-white text-opacity-60">
                                <Link href={"/consultation"} >YouTube Consultation</Link>
                                <Link href={"/consultation"} >YouTube SEO</Link>
                                <Link href={"/consultation"} >YouTube Keyword Research</Link>
                                <Link href={"/consultation"} >YouTube Automation</Link>
                                <Link href={"/consultation"} >YouTube Monetization</Link>
                                <Link href={"/consultation"}>YouTube Promotion</Link>
                                <Link href={"/consultation"} >YouTube Channel Managment</Link>
                            </div>
                        </div>
                        <div>
                            <div class="mb-4 sm:mb-3 font-bold">
                                Other
                            </div>
                            <div class="flex flex-col items-start space-y-3 text-white text-opacity-60">
                                <Link href="/contact-us">Contact
                                </Link>
                                <Link href="/jobs">Jobs
                                </Link>
                                <Link href='/team'>
                                    Team
                                </Link>
                                <Link href="/legal-info">Privacy
                                </Link>
                                <Link href="/contact-us">
                                Support
                                </Link>
                               
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-full md:col-span-3 text-md mt-8 md:mt-0">
                    <div class="font-bold mb-2 md:mb-3">
                        Connect with us
                    </div>
                    <div class="leading-5 text-white text-opacity-60">
                        Call Sales +92 327 007 5555
                    </div>
                    <div className="mt-4 flex items-center space-x-4">
                        <Link href="/our-channels" className="hover:opacity-70" title="YouTube" ><RiYoutubeLine size={30} /></Link>
                        {/* <a href="https://www.facebook.com" target="_blank" className="hover:opacity-70" title="Facebook"><AiOutlineFacebook size={30} /></a> */}
                        <a href="https://www.instagram.com/dawoodproud/" target="_blank" className="hover:opacity-70" title="Instagram"><AiOutlineInstagram size={30} /></a>
                        {/* <a href="https://twitter.com/dawoodproud" target="_blank" className="hover:opacity-70" title="Twitter"><BsTwitter size={30} /></a> */}
                        <a href="https://www.linkedin.com/company/dawoodproud" target="_blank" className="hover:opacity-70" title="LinkedIn"><AiOutlineLinkedin size={30} /></a>
                    </div>

                </div>

                {/* <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-9 mt-9 col-span-full">

                </div> */}


            </div>
        </div >


    )
}

export default Footer



