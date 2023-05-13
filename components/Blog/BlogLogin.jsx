import React from 'react'
import Image from 'next/image';
import { HiArrowSmRight } from "react-icons/hi"

function BlogLogin() {
    return (

        <div>
            <div className="flex flex-col items-center justify-center min-h-screen ">

                <div className='w-[80px] h-[80px] relative mx-auto'>
                    <Image src={"/Images/logo.png"} alt="logo" fill className='object-contain' />

                </div>
                <div className="grid grid-cols-1 w-full px-6 py-4 mt-6  bg-white shadow-md sm:max-w-md sm:rounded-lg">
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
                        <div className="flex items-center justify-between mx-auto mt-4 gap-2">
                            <div className='mt-4'>
                                <a href="#" className="text-sm  underline text-[gray]/70 hover:text-[gray]">
                                    Already registered?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out  border border-transparent rounded-md !bg-[#139dff] ">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default BlogLogin