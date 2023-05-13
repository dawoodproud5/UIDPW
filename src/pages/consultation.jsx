import { useState } from 'react'
import UserInput from '../../components/CallToAction/UserInput'
import Navbar from '../../components/common/Navbar'



function cutomerpage() {


   

    return (
        <>
           
            <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
                <div className='w-full bg-[#121521]  h-[40vh] md:h-[55vh]'>
                    <Navbar bg_color={"white"} />
                    <div className=' max-w-[1172px] mx-auto'>
                        <div className='flex justify-start items-start space-y-2 py-4 ml-[8%] md:ml-[10%] lg:ml-[11%] mt-2 md:mt-6'>
                            <h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold abdal_color'>
                                <span className='text-[#1ecce4]'>We Think big,</span> <br />
                                <span className="text-[#ead941]">start small,</span> <br />
                                <span className="text-white">and move fast</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='text-[black] min-h-[100vh] mx-auto mt-16 max-w-[1200px] my-auto '>
                    <UserInput />
                </div>
            </div>
        </>
    )
}

export default cutomerpage