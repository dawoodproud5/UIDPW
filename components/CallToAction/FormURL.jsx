import React from 'react'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
function FormURL({ formData, onChange, nextStep, prevStep }) {
    return (

        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto space-y-1'>
            <div className='flex flex-col justify-between items-center gap-8 '>
                <h1 className='text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-center '>Thank you for Showing Interest in Dawood Proud Services <br /> to take your YouTube Channel to New Heights</h1>
                <h2 className='text-[18px] sm:text-[20px]  font-medium text-center text-[#139dff]'>Great! Let&#39;s Talk Brand...</h2>
                <h2 className='text-[18px] sm:text-[20px]  font-medium text-center '>Please Write your YouTube Channel Handle or Paste Channel URL here. <br /> (Optional for New YouTubers)</h2>

            </div>
            <label htmlFor="URL"></label>
            <input
                type="text"
                id="URL"
                placeholder="URL of Your YouTube Channel"
                // className="block px-4 py-3  placeholder-gray-500"
                style={{
                    border: 'none',
                    borderBottom: "2px solid #139dff",
                    borderRadius: "0px",
                    padding: "16px",
                    marginBottom: "12px",
                    outline: 'none',


                }}
                name="URL"
                value={formData.URL}
                onChange={onChange}
                required

            />

            <div className='flex justify-center items-center gap-4'>
                <button type="button" onClick={prevStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                    <FiArrowLeft size={30} />
                </button>
                <button type="button" onClick={nextStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                    <FiArrowRight size={30} />
                </button>

            </div>

        </div>

    )
}

export default FormURL