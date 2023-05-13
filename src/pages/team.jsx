import React from 'react'
// import Image from 'next/image'
import CEOCard from '../../components/TeamSection/CeoCard'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Tab from "../../components/Careers/CareersTab"
import { relative } from 'path'
import TeamMembers from '../../components/TeamSection/TeamMembers'


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

function TeamPage() {
    return (
        <div className='w-full font-Inter bg-white h-full'>
            <div className="w-full bg-[#121521] h-[40vh] md:h-[55vh]">
                <Navbar bg_color={""} position={relative} />
                <div className=' max-w-[1172px] mx-auto '>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[12%] mt-2 md:mt-6  '>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold abdal_color'>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1172px] mx-auto flex flex-col justify-center items-start space-y-5  text-center mb-12'>
                <div className='ml-[8%] md:ml-[10%] lg:ml-[11%] mx-auto'>
                    <Tab tabs={tabs} />
                </div>
          
                <div className='mx-4 sm:mx-2'>
                    <TeamMembers />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TeamPage