import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab2 from "../../components/JobsTab/JobsTab"
import Tab from "../../components/Careers/CareersTab"
import Image from 'next/image'
import Link from 'next/link'
import JobClosedBtn from '../../components/JobsTab/JobClosedPop'
import HiringRecruttie from '../../components/JobsTab/HiringRecruttie'
function careers() {

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

    const tabs2 = [
        {
            label: "Job details",
            link: "/job-details"
        },
        {
            label: "Apply",
            link: "/apply"
        }
    ]
    const jobsClosed = [
        {
            "Job": "Multimedia Designers",
            "Location": "March 2023 • In-Office • G-11/2, Sachal Sarmast Road, Islamabad"
        },
        {
            "Job": "Corporate Video Editors",
            "Location": "January 2023 • In-Office • G-11/2, Islamabad"

        },
        {
            "Job": "Graphic Designers",
            "Location": "Jan 2022 • Remote"

        },
        {
            "Job": "Content Writer",
            "Location": "Jan 2022 • In-Office • G-11, Islamabad"

        },

        {
            "Job": "Multimedia Designers",
            "Location": "December 2022 • In-Office • G-11, Islamabad"

        },
        {
            "Job": "Commercial Video Editors",
            "Location": "September • Remote "

        },
        {
            "Job": "Voice-Over Artists (American Accent) ",
            "Location": "August 2022 • Remote"

        },

        {
            "Job": "Content Writers",
            "Location": "June 2022 • Remote"

        },

        {
            "Job": "SEO Experts",
            "Location": "May 2022 • Remote"

        },

        {
            "Job": "Voice-Over Artists (American Accent) ",
            "Location": "April 2022 • Remote"

        },

        {
            "Job": "Video Editors",
            "Location": "February 2022 • Remote"

        },
        {
            "Job": "Video Content Creator",
            "Location": "December 2021 • Remote"
        },

    ]

    const UpcomingJobs = [
        {
            "Job": "Content Writer",
            "Location": "June 2023 • In-Office • G-11/2, Islamabad"
        },
        {
            "Job": "Sales Specialist",
            "Location": "June 2023 • In-Office • G-11, Islamabad"

        },
        {
            "Job": "Voice-Over Artist (Male, Urdu) ",
            "Location": "June 2023 • Remote"

        },
        {
            "Job": "Video Editors",
            "Location": "June 2023 • In-Office • G-11/2, Sachal Sarmast Road, Islamabad"

        },

        {
            "Job": "Content Writers",
            "Location": "July 2023 • Remote"

        },
        {
            "Job": "Video Content Creator",
            "Location": "July 2023 • In-Office / Remote • G-11, Islamabad"

        },


    ]



    return (
        <div className='w-full  font-Inter text-white bg-white min-h-screen h-full'>
            <div className="w-full bg-[#121521]  h-[40vh] md:h-[55vh]">
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1172px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[12%] mt-3 md:mt-6'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold abdal_color'>
                            <span className='text-[#1ecce4]'>First do it,</span> <br />
                            <span className="text-[#ead941]">then do it right,</span> <br />
                            <span className="text-white"> then do it better.</span>
                        </h1>

                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-start max-w-[1172px] mx-auto gap-2'>
                <div className='ml-[4%] md:ml-[10%] lg:ml-[11%]'>
                    <Tab tabs={tabs} />
                </div>

                <hr className='w-[30%]' />
                <div className='flex flex-col justify-center items-center text-[#333333] font-Inter mt-6 gap-2 mx-auto ml-[0%] md:ml-[10%] lg:ml-[12%] p-6'>
                    <div className='flex flex-col justify-center items-start gap-3 w-full self-start'>
                        <h2 className='font-semibold  text-[24px] md:text-[28px] text-center sm:text-left' >Why Work at Dawood Proud Agency?</h2>
                        <p className='font-normal text-[12px] sm:text-[14px] md:text-[16px] font-Inter'>Our Motto is &quot;Stand Out from the Crowd&quot;. That&#39;s why we offer our Employees much more than just a job —

                            We offer them a chance to be a part of something bigger. For starters, we offer highly Competitive Salaries that are way above the industry average. But that&#39;s not all - We also provide our employees with home-like facilities that make coming to work a joy. Our office environment is designed to encourage creativity and innovation.
                            <br />
                            <br />

                            At our Company, we pride ourselves on having a flat hierarchy. This means that everyone has a voice, and everyone&#39;s ideas are valued. We&#39;re always exploring new growth opportunities, which means there&#39;s plenty of potential for our employees to take on new tasks and help shape the company. We believe in empowering our employees to make informed, independent decisions that add real value to our business.
                            <br />
                            <br />
                            If you&#39;re looking for a job that offers much more than just a paycheck, then this is the Right place for you !
                        </p>
                    </div>
                    <div className='w-[250px] xs:w-[400px] sm:w-[500px] md:w-[680px] h-[300px] xs:h-[300px] sm:h-[300px] md:h-[400px] relative '>
                        <Image src={"/Images/jobs.png"} fill className='object-contain' alt='jobimage'></Image>
                    </div>
                </div>
                <div className='mx-auto flex flex-col justify-start items-start gap-12 mb-6  md:ml-[10%] lg:ml-[15%] max-w-[900px] p-3'>
                    <div className=''>
                        <h3 className='text-[black] text-[24px] sm:text-[32px] md:text-[44px] font-semibold'>Open positions</h3>
                    </div>
                    <div className='text-[black] max-w-[600px]'>
                        <div className='border-2 border-solid border-[black]/20 grid grid-cols-[2fr_1fr] justify-between items-start sm:items-center px-3 md:px-3 py-3 md:py-6 shadow-md'>
                            <div className='flex flex-col '>
                                <p className='text-[16px] md:text-[20px] font-semibold'>YouTube Growth Strategis</p>
                                <p className='text-[14px] md:text-[16px] font-normal'>May 2023 • In-Office • G-11, Islamabad</p>
                            </div>
                            <div className='mx-auto '>
                                <Link href={"/job-details"}
                                    type="button"
                                    class="border border-indigo-500 text-[12px] md:text-[14px] bg-[black] text-white rounded-md  px-3 md:px-6 py-2 md:py-3  md:m-2  focus:outline-none focus:shadow-outline">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto flex flex-col justify-start items-start gap-12   md:ml-[10%] lg:ml-[15%] max-w-[900px] p-3 '>
                    <h3 className='text-[black] text-[24px] sm:text-[32px] md:text-[44px] font-semibold'>Upcoming positions</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 text-[black] mx-auto gap-4 md:gap-8' >
                        {UpcomingJobs.map((data, index) => {
                            return (
                                <div key={index} className='border-1 border-solid border-[black] flex flex-col gap-2 md:grid md:grid-cols-[2.2fr_1fr]  px-3 md:px-2 py-3 md:py-4 shadow-md '  >
                                    <div className='flex flex-col ' >
                                        <p className='text-[16px] md:text-[20px] font-semibold' >{data.Job}</p>
                                        <p className='text-[14px] md:text-[16px] font-normal'>{data.Location}</p>
                                    </div>
                                    <JobClosedBtn status="Opening Soon" desc="Stay Tuned. Open Position will be available Soon! " />
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className='mx-auto flex flex-col justify-start items-start gap-12   md:ml-[10%] lg:ml-[15%] max-w-[900px] p-3 '>
                    <h3 className='text-[black] text-[24px] sm:text-[32px] md:text-[44px] font-semibold'>Closed positions</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 text-[black] mx-auto gap-4 md:gap-8' >
                        {jobsClosed.map((data, index) => {
                            return (
                                <div key={index} className='border-1 border-solid border-[black] flex flex-col gap-2 md:grid md:grid-cols-[2.2fr_1fr]  px-3 md:px-2 py-3 md:py-4 shadow-md '  >
                                    <div className='flex flex-col ' >
                                        <p className='text-[16px] md:text-[20px] font-semibold' >{data.Job}</p>
                                        <p className='text-[14px] md:text-[16px] font-normal'>{data.Location}</p>
                                    </div>
                                    <JobClosedBtn status="Job Closed" desc="Job Is Closed" />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>

            <HiringRecruttie />


            <Footer />
        </div>
    )
}

export default careers

