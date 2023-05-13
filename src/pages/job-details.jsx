
import React from 'react'
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"
import Tab from "../../components/Careers/CareersTab"
import Link from 'next/link'
import FAQs from '../../components/JobsTab/FAQs'
const tabs2 = [
    {
        label: "Job details",

        link: "/job-details1"
    },
    {
        label: "Apply",
        link: "/apply"
    }
]

function JobDetails() {
    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <div className="w-full  bg-[#121521]  h-[40vh]  md:h-[55vh]">
                <Navbar bg_color={"white"} />
                <div className=' max-w-[1200px] mx-auto'>
                    <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[6%] lg:ml-[7%] mt-3 md:mt-6'>
                        <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold abdal_color '>
                            <span className='text-[#1ecce4]'>We Think big,</span> <br />
                            <span className="text-[#ead941]">start small,</span> <br />
                            <span className="text-white">and move fast</span>
                        </h1>
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col justify-center items-start max-w-[1172px] space-y-10 mb-8 mx-auto '>
                <div className='ml-[8%] md:ml-[6%] lg:ml-[6%] '>
                    <Tab tabs={tabs2} />
                </div>


                <div className='flex flex-col justify-center items-center text-[black] font-Inter space-y-8 w-full max-w-[1172px] mx-auto p-4 '>

                    <div className='flex flex-col gap-1 ml-[8%] md:ml-[6%] lg:ml-[6%] space-y-4 '>
                        <div>
                            <h1 className='font-medium text-[32px] mb-4'>Key Features</h1>
                            <ul className='font-normal text-[20px] list-disc  leading-9 px-4'>
                                <li>In-Office Job for Dawood Proud Agency</li>
                                <li>Work Hours: 9 to 5, From Monday to Saturday</li>
                                <li>Location: On-site — Sector G-11 Islamabad</li>
                                <li>Salary: 60,000 Rupees per month + Other Allowances</li>
                                <li>No Previous Work Experience is Required</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-medium text-[32px] mb-4'> Basic Job Requirements:</h3>
                            <ul className='font-normal text-[20px] list-disc  leading-9 px-4'>
                                <li>Applicants should have Strong English Written Skills</li>
                                <li> Applicants should be the Resident of Islamabad or Rawalpindi as our offices are located in Sector G-11.</li>
                                <li>Applicants should have a passing-out year of either 2022 or 2023. We are seeking fresh graduates who have already completed their bachelor&#39;s degree recently.</li>
                                <li>Applicants should have at least 5 years of active internet usage experience. We&#39;re looking for Gen-Z employees with a strong command over the internet.</li>
                                <li>Applicants should have a reliable laptop that can run Multiple Browsers and their extensions smoothly.</li>
                                <li>No previous work experience is required. We provide comprehensive training to all new team members so they can succeed as a YouTube Gurus.</li>
                            </ul>
                        </div>


                        <div>
                            <h2 className='font-medium text-[32px] mb-4'>Why Join Us?</h2>
                            <p className="font-normal text-[20px]  leading-9 p-1">At our organization, we believe that taking care of our employees is crucial for building a strong and positive work culture. That&#39;s why we offer a range of perks and benefits that make our workplace an enjoyable and fulfilling environment for everyone. Like:</p>
                            <ul className='font-normal text-[20px] list-disc  leading-9 p-4'>
                                <li><strong>Competitive Salary:</strong> We offer a way higher salary than the industry standard, so you can be sure that your hard work is appreciated.</li>
                                <li><strong>Home-Like Environment:</strong> We want our team members to feel comfortable and relaxed at work, so we&#39;ve created a home-like environment that is conducive to productivity and creativity.</li>
                                <li><strong>Home-Cooked Meals:</strong> Our dedicated cook prepares delicious and nutritious meals every day, so you can enjoy a healthy and tasty lunch without having to worry about it. We provide dedicated cook for each team to cater to their dietary preferences.</li>
                                <li><strong>Lunch and Prayer Break:</strong> We understand the importance of taking a break and recharging your batteries, so we offer a lunch break and a prayer break for our Muslim team members.</li>
                                <li><strong>Unlimited Tea and Coffee:</strong> We know that caffeine is a must-have for many of us, so we provide unlimited tea and coffee supply to keep you energized throughout the day.</li>
                                <li><strong>Growth Environment:</strong> We are committed to helping our team members grow and develop their skills, so we offer regular training and development opportunities.</li>
                                <li><strong>Positive Vibes:</strong> We believe that a positive work environment is essential for our team members&#39; happiness and success, so we cultivate a non-toxic, apolitical and supportive culture at our organization.</li>
                            </ul>
                            <p className="font-normal text-[20px]  leading-9 p-1">We understand that a happy and satisfied employee is the key to Happy Clients. That&#39;s why we go the extra mile to create a supportive environment where you can thrive. Joining our team means not just a job, but an experience of a lifetime. We Really Appreciate Sir Dawood, for his Kind services and for creating an atmosphere where every team member is valued and respected. So, apply now without any worries, and let us take care of your career growth!</p>
                        </div>



                        <div>
                            <h2 className="font-medium text-[32px] mb-4">The ideal candidate is expected to:</h2>
                            <ul className='font-normal text-[20px] list-disc  leading-9 p-4'>
                                <li>Have can-do attitude and a willingness to learn. This is very important because you (as a YouTube Content Strategist) will be working with international YouTubers, helping them to grow their YouTube channels. The ability to adapt to new cultures, trends, and client needs is key to success in this role.</li>
                                <li>Have the ability to work well in a team environment, as well as independently.</li>
                                <li>Have Strong digital quotient with a high exposure to the internet and be able to quickly learn new digital skills.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-medium text-[32px] mb-4'>What you will be doing:</h3>
                            <p className='font-normal text-[20px] '>At our Organization, you will be trained you as “YouTube Content Strategist”. After getting proper training, You will be responsible to:</p>
                            <ul className='font-normal text-[20px] list-disc  leading-9 p-4'>
                                <li>Create customized growth strategies for client’s YouTube Channel.</li>
                                <li>Conduct in-depth research to identify trends and opportunities in Client’s Niche.</li>
                                <li>Develop content ideas and collaborating with clients on content creation.</li>
                                <li>Analyzing channel performance and making data-driven recommendations for improvement.</li>
                                <li>Providing ongoing support and guidance to clients to help them achieve their goals.</li>
                            </ul>
                            <p className="font-normal text-[20px] list-disc  leading-9 p-1">
                                Don&#39;t worry if you don&#39;t have prior experience in this field - we know how to train our team members for success as YouTube Content Strategists. This is not rocket science, but it does require a willingness of employees to learn and the ability to adapt quickly to new concepts and ideas. Our comprehensive training program will teach you everything you need to know to excel in this role, including the latest YouTube trends, growth strategies, audience engagement tactics, and more. We believe that investing in our team members is key to our success as a company.
                            </p>
                        </div>


                        <div>
                            <h3 className='font-medium text-[32px] mb-4'>Selection Process</h3>
                            <p className='font-normal text-[20px] '>We take our recruitment process seriously to ensure that we hire the best fit for our team. Here&#39;s what you can expect from the selection process:</p>
                            <ul className='font-normal text-[20px] list-disc  leading-9 p-4'>
                                <li><strong>Website Application Form</strong>: First, applicants will need to fill out the job application form available on our website. We will scrutinize each application and evaluate candidates based on their skills, qualifications, and more.</li>
                                <li><strong>Online Interviews:</strong> Shortlisted candidates will be invited to attend an online interview with our team. This interview will be conducted via video conferencing software and will give us the opportunity to get to know you better.</li>
                                <li><strong>On-Site Interview</strong>: After the online interview, shortlisted candidates will be invited to an on-site interview at our office in G-11, Islamabad. This interview will allow us to assess your technical and professional skills and provide you with the opportunity to meet our team and get a feel for our organization. Either you will be Selected or Placed in Pool for other Divisions.</li>
                                <li><strong>Offer</strong>: If you&#39;re selected as the best fit for the role, we will make you an offer to join our team as a YouTube Content Strategist.</li>
                            </ul>
                            <p className="font-normal text-[20px] list-disc  leading-9 p-1">
                                We understand that the recruitment process can be nerve-wracking, but we promise to keep you informed at every step and provide feedback on your application and interviews. We value transparency and honesty, and we&#39;ll do our best to make the process as smooth and stress-free as possible. If you find yourself eligible for this role, if you&#39;re ready to take the next step in your career as a YouTube Growth Consultant, don&#39;t hesitate to apply and let us discover your potential!
                            </p>
                        </div>
                    </div>

                    <div className='mx-auto'>
                        <Link href={"/apply"}>
                            <button
                                type="button"
                                class="text-2xl font-medium border border-indigo-500 bg-[black] text-white rounded-md px-14 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                Apply
                            </button>
                        </Link>
                    </div>
                    <div className="w-full mx-auto p-2">
                        <FAQs />
                    </div>

                </div>
            </div>
            <Footer />
        </div >

    )
}

export default JobDetails




