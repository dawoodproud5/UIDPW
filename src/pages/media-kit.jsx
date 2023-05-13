import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab from "../../components/Careers/CareersTab"
import Image from 'next/image'
import Link from 'next/link'

function MediaKit() {


    const tabs = [
        {
            label: "Who we are",

            link: "/about-us"
        },
        {
            label: "Our Team",
            link: "/team"
        },
        {
            label: "Jobs",
            link: "/jobs"
        },
        {
            label: "Media Kit",
            link: "/media-kit"
        },
        {
            label: "Legal Info",
            link: "/legal-info"
        }
    ];


    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <div className="w-full  bg-[#121521]  h-[40vh] md:h-[55vh]">
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1172px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[12%] mt-3 md:mt-6'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold abdal_color '>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col justify-center items-start max-w-[1172px] space-y-10 mb-8 mx-auto'>
                <div className='ml-[4%] md:ml-[10%] lg:ml-[11%]'>
                    <Tab tabs={tabs} />
                </div>


                <div className='flex flex-col justify-around text-[#333333] font-Inter gap-4 w-full  mx-auto self-start p-6'>
                    <div className='flex flex-col  items-start justify-start space-y-12 ml-[6%] sm:ml-[10%] md:ml-[10%] xl:ml-[15%]'>
                        <div className='grid xs:grid-cols-2 md:grid-cols-3 items-center md:items-start justify-center md:justify-start gap-2 sm:gap-3 lg:gap-4 xl:gap-12  mx-auto'>
                            <div className='flex flex-col justify-start gap-2'>
                                <div className='relative w-[260px] xs:w-[200px] sm:w-[230px]  lg:w-[250px] xl:w-[280px] h-[280px]'>
                                    <Image src={"/Images/Logosahref/DP1D.png"} fill className="object-contain" alt='jobi1mage1'></Image>
                                </div>
                                <p>Dark</p>
                            </div>
                            <div className='flex flex-col justify-start gap-2 drop-shadow-lg'>
                                <div className=' relative w-[260px] xs:w-[200px] sm:w-[230px] lg:w-[250px] xl:w-[280px] h-[280px] '>
                                    <Image src={"/Images/Logosahref/DP2W.png"} fill className='object-contain' alt='jobi1mage2'></Image>
                                </div>
                                <p>White</p>
                            </div>

                            <div className='flex flex-col justify-start gap-2'>
                                <div className=' relative w-[260px] xs:w-[200px] sm:w-[230px]  lg:w-[250px] xl:w-[280px] h-[280px]'>
                                    <Image src={"/Images/Logosahref/DP3B.png"} fill className='object-contain' alt='j1obimage3'></Image>
                                </div>
                                <p>Black</p>
                            </div>

                        </div>
                        <a href={"https://www.dropbox.com/sh/sovsg6zfj438yec/AACU6G9VJvG2OAfpeDoNXnpla?dl=0"} target="_blank">
                            <button className='bg-[#ff8800] text-[#fff] px-[1rem] py-[6px] rounded-[3px] hover:bg-[#ea7e02] '>Download logo Kit</button>
                        </a>


                    </div>


                </div>
            </div>


            <Footer />
        </div >
    )
}



export default MediaKit