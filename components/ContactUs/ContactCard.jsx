import Image from 'next/image';
import { BsFillChatRightDotsFill } from "react-icons/bs"
import React, { useEffect } from 'react';



function ContactCard() {

    function handleButtonClick() {
        window.open('https://wa.me/+923270075555?text=Hi,%20how%20can%20we%20help%20you%3F', '_blank');
    }

    return (
        <div className='px-4'>
            <div className='grid grid-cols-1 md:grid-cols-12 bg-white max-w-4xl  border border-[gray] p-12 shadow-2xl drop-shadow-2xl mx-auto rounded-lg'>
                <div className='col-span-5 px-6 space-y-5 text-base font-medium'>
                    <h2 className='text-2xl'>Call Us</h2>
                    <div>
                        <p>Contact Our Support Team</p>
                        <p className='text-[#139dff] font-normal'>+92 327 007 5555</p>
                    </div>
                    <div>
                        <p>Email Us</p>
                        <p className='text-[#139dff] font-normal'>support@dawoodproud.com</p>
                    </div>
                    <div>
                        <p>For Any Complaints, Email Us at</p>
                        <p className='text-[#139dff] font-normal'>complaints@dawoodproud.com</p>
                    </div>
                </div>
                <div className='md:h-full md:w-[2px] bg-[gray] col-span-1 '>

                </div>
                <div className='col-span-6 px-6 space-y-6 font-medium'>

                    <h2 className='text-2xl'>Chat Now</h2>
                    <p className='text-base font-normal'>Chat our sales and support team for quick answerson services, pricing and more</p>

                    <button onClick={handleButtonClick} className='flex justify-center items-center px-4 py-3 bg-[#139dff] rounded-md gap-2 text-white font-medium' >
                        <BsFillChatRightDotsFill className='mt-1' />
                        <p >
                            Chat now
                        </p>
                    </button>
                    <div>
                        <p>
                            Hours:  24x7
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard