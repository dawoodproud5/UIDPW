import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";
import { height } from "@mui/system";
import { AiFillStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc"
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

function Hero() {
    return (

        <div className="w-full min-h-screen flex flex-col items-center justify-center font-Inter ">
            <Navbar bg_color={"bg-gradient-to-b from-[#121521] to-[#121521]/0"} position={'fixed'} />

            {/* hero section text and images div */}

            <div className="h-full font-Inter  max-w-[1172px] relative z-[1] w-full  ">
                {/* -mt-[10vh] sm:-mt-[15vh] lg:mt-3 */}
                <div className="h-full w-full  text-white text-center flex flex-col  items-center justify-center space-y-4 mx-auto ">
                    {/* hero section text */}
                    <div className=" flex flex-col justify-center items-center space-y-1 mx-auto  p-0 sm:p-4 md:p-6 gap-4">
                        <div className="flex flex-col -space-y-3">
                            <h1 className=" font-extrabold text-[32px] sm:text-[36px] md:text-[40px] xl:text-[48px] abdal_color px-8 xs:px-0">Dawood Proud</h1>
                            <h1 className=" font-extrabold text-[28px] sm:text-[36px] md:text-[40px] xl:text-[40px] abdal_color1 px-8 xs:px-0 "> Stand Out from Crowd</h1>
                        </div>
                        <div className="flex flex-col gap-1 max-w-[1172px] font-medium md:font-semibold px-3 sm:px-0 lg:font-medium  text-white sm:text-[16px] md:text-[18px] lg:text-[20px] text-center">
                            <p> Ultimate Destination for all  <span className="abdal_color1"> <strong> YouTube Growth Services</strong></span> to take your channel to new heights.</p>
                            <p>All the successful YouTubers have one thing in common <span className="abdal_color2 "> <strong> {"\"They have Winnig Content Strategy.\""}</strong> </span> </p>
                        </div>
                        <div>
                            <button className='flex justify-center items-center px-2 py-3  rounded-xl  font-bold text-white bg-[#139dff] hover:bg-[#3b82f6] mt-0 '>
                                <Link href={"/consultation"} className="text-base">Let&#39;s Start a New Project</Link>
                                <BsArrowRightShort size={25} />
                            </button>
                        </div>
                    </div>

                    {/* hero image here */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-1 justify-between items-center max-w-[768px] w-full px-4 mx-auto">
                        <div className="flex flex-col gap-2 ">
                            <div className='w-[200px] md:w-[250px] h-[100px] md:h-[130px] relative '>
                                <Image src={"/Images/trustpilot.webp"} alt={'image for the truts pilot'} fill></Image>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className='flex flex-col justify-center items-center text-white hover:text-[#00b67a] font-semibold text-base' >5.0 reviews on Trustpilot</p>
                                <p className='flex flex-col justify-center items-center text-white hover:text-[#00b67a] font-semibold text-base' >Based on 684 Reviews</p>
                            </div>

                        </div>
                        <div className='gap-2 border-1 border-solid border-[black] flex flex-col justify-center items-center p-3 shadow-sm  rounded-sm'>
                            <div className="flex justify-center items-center gap-3">
                                <FcGoogle className="text-[40px]"></FcGoogle>
                                <p className="text-[white] text-[28px] sm:text-[24px] md:text-[30px] font-bold">Google Reviews</p>
                            </div>
                            <div className='flex  justify-center items-center text-[#eeee0d]'>
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                                <AiFillStar className="text-[35px] sm:text-[30px] md:text-[40px]" />
                            </div>
                            <div className=" text-[18px] sm:text-[16px]  md:text-[20px]">
                                <p> <strong>4.9</strong> Stars | Based on <strong>521</strong> Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

