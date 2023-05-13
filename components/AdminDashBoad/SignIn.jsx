import React from 'react'
import Image from 'next/image'
import { HiArrowSmRight } from "react-icons/hi"
function SignIn() {
    return (

        <div >
            <div className="flex flex-col items-center min-h-screen  justify-center sm:pt-0 space-y-6 gap-2 px-4 font-Inter">
                <div className='text-white text-2xl sm:text-5xl font-bold text-center space-y-4 max-w-3xl mt-8'>
                    <p>
                    Welcome to our exclusive Client-Only Blog!
                    </p>
                    <p className=' text-xl sm:text-xl font-semibold'>
                    Log in to Gain access to insider knowledge, YouTube Algorithm Update, Latest Trends, and Valuable Tips designed to help you succeed in YouTube industry.
                    </p>
                </div>
                <div className="grid grid-cols-1 w-full px-6 py-3 mt-6  bg-white shadow-md max-w-md rounded-lg">
                    <form>
                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-[#616161]"
                            >
                                Username
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className=" w-full mt-1 border-[#E0E0E0] rounded-md shadow-sm focus:border-[#7986CB] focus:ring focus:ring-[#9FA8DA] focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-[#616161]"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className=" w-full mt-1 border-[1px] p-2  border-[#E0E0E0] rounded-md shadow-sm focus:border-[#7986CB] focus:ring focus:ring-[#9FA8DA] focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className=' self-center mt-4'>
                            <button className="transition duration-200  w-full  px-5 py-3 cursor-pointer  rounded-lg text-[white] bg-[#139dff] hover:bg-[#EEEEEE] focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-[#c6d3e6] focus:ring-opacity-50 ring-inset">
                                <div className='flex justify-center items-center gap-2'>
                                    <div>
                                        <span className="text-lg font-medium">Login</span>
                                    </div>

                                    <div className='mt-1'>
                                        <HiArrowSmRight size={25} />
                                    </div>

                                </div>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn