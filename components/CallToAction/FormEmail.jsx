import React from 'react'
import { FiArrowLeft } from "react-icons/fi"
function FormStep7({ formData, onChange, nextStep, prevStep, submit }) {
    return (
        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto space-y-2'>
            <div className='flex flex-col justify-between items-center gap-8 md:gap-14 '>
                <h1 className='text-[18px] sm:text-[20px] md:text-[24px] font-bold text-center '>Thanks for showing interest in Dawood Proud <br /> One Step services to grow your business.</h1>
                <h2 className='text-[16px] md:text-[20px] font-medium '>Last Question... What is your email address?</h2>
            </div>
            <label htmlFor="name"></label>
            <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                // className="block px-4 py-3  placeholder-gray-500"
                style={{
                    border: 'none',
                    borderBottom: "2px solid #139dff",
                    borderRadius: "0px",
                    padding: "16px",
                    marginBottom: "12px",
                    outline: 'none',


                }}
                name="email"
                value={formData.email}
                onChange={onChange}
                required

            />
            <div className='flex justify-center items-center gap-4'>
                <button type="button" onClick={prevStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                    <FiArrowLeft size={30} />
                </button>
                <button type="button" onClick={submit} className="bg-[#139dff] px-5 py-1 rounded-full text-white text-[20px]">
                    Submit
                </button>
            </div>

        </div>
    )
}

export default FormStep7


