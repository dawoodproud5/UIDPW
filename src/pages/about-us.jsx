import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab from "../../components/Careers/CareersTab"

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


    return (
        <div className='w-full  font-Inter text-white bg-white h-full '>
            <div className="w-full   bg-[#121521]  h-[40vh] md:h-[55vh]">
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1172px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[12%] mt-3 md:mt-6'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold abdal_color'>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-start max-w-[1172px] space-y-10  mx-auto mb-24'>
                <div className='ml-[4%] md:ml-[10%] lg:ml-[11%] '>
                    <Tab tabs={tabs} />
                </div>

                <div className='flex flex-col justify-center items-center text-[#333333] font-Inter gap-4 w-full mx-auto  p-6  '>
                    <div className='flex flex-col gap-2 ml-[0%] md:ml-[10%] lg:ml-[12%]'>
                        <h1 className='font-semibold  text-[24px] md:text-[28px]'>About our Agency</h1>
                        <p className='font-normal text-[16px]'>
                            Welcome to Dawood Proud, your one-stop-shop for all <span> <strong>YouTube Growth Services!</strong></span> Our agency specializes in providing high-quality services for YouTube content creators,
                            helping them grow their channels and reach a wider audience. Whether you&#39;re just starting out or have been creating content for years,
                            our team of experts has the knowledge and experience to take your channel to the next level. Our motto is simple yet powerful – &quot;Stand Out from the Crowd.&quot;
                            <br />
                            <br />
                            Our agency was founded by <span><strong> Dawood Hussain</strong></span>, a man who has been fascinated with the inner workings of the <span><strong>YouTube Algorithm</strong></span> since his undergraduate days. Dawood&#39;s curiosity led him to build his first
                            web crawler for the YouTube Search Engine, and he quickly became an expert on the platform. However, being a shy person, he found it difficult to come in front of the camera. To overcome this, he
                            started creating <span><strong>Faceless Automated YouTube Channels</strong></span> in different niches. (These channels can be seen in the &quot;Our Channels&quot; Section of our website). Dawood used his expertise to grow these channels,
                            and they soon became a hit among the English Speaking International Audience.
                            <br />
                            <br />

                            Due to overwhelming requests from creators around the world, Dawood decided to help other YouTubers to grow on the platform. His interest in the YouTube Algorithm never waned, and in 2019,
                            he took the leap to start his own online business to provide YouTube Growth Services. Since then, this Agency has helped countless creators achieve their goals and reach a wider audience on the platform.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2 ml-[0%] md:ml-[10%] lg:ml-[12%]'>
                        <h2 className='font-semibold text-[28px]'> About our Services</h2>
                        <p className='font-normal text-[16px]'>
                            Our team of experts specializes in providing customized solutions for every aspect of YouTube Channel Growth, from developing a <span><strong>YouTube Content Strategy</strong></span> to Engaging
                            <span><strong>YouTube Content Creation</strong></span>. With our help,
                            you can identify low competition niches, find winning YouTube Keywords,
                            Rank your Videos higher in YouTube Search Results and can promote your Videos to Target Audiences.
                            <br />
                            <br />
                            Speaking of growth services, our <span><strong>YouTube Content Creation</strong></span> service is second to none. We pride ourselves on producing <span><strong>high-quality videos</strong></span> that capture your audience&#39;s attention and keep them engaged.
                            Our team takes care of everything, from <span><strong>scriptwriting</strong></span> and filming to <span><strong>editing, thumbnail designing,</strong></span> and <strong><span>post-production</span></strong>. You can sit back, relax, and let us do the hard for you.
                            <br />
                            <br />
                            At Dawood Proud, we are committed to delivering exceptional service that exceeds your expectations. We understand the importance of growing your YouTube channel and increasing your online presence,
                            which is why we work tirelessly to ensure that our services are designed to take your YouTube channel to the next level!
                            <br />

                        </p>
                    </div>

                </div>
                <div className='w-[250px] xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[900px] h-[200px] md:h-[400px] lg:h-[500px] mx-auto border-1 shadow-lg ml-[8%] md:ml-[10%] lg:ml-[12%] px-2 content-center '>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1660.3023579296248!2d72.99264080701323!3d33.667402752637045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQwJzAyLjYiTiA3MsKwNTknMzcuMiJF!5e0!3m2!1sen!2s!4v1682759393458!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className=''>
                <Footer />
            </div>

        </div >
    )
}

export default careers

