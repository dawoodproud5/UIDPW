import React from 'react'
import { FiArrowRight } from "react-icons/fi"


function FormStep1({ formData, nextStep, onChange }) {
    return (
        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto space-y-9'>
            <div className='flex flex-col justify-between items-center gap-8 '>
                <h1 className='text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-center '>Thank you for Showing Interest in Dawood Proud Services <br /> to take your YouTube Channel to New Heights</h1>
                <h2 className='text-[16px] md:text-[20px] font-semibold text-center '> <span className='text-[black]/70'>Let&#39;s get started...</span> What&#39;s your full name?</h2>
            </div>
            <label htmlFor="name"></label>
            <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                // className="block px-4 py-3  placeholder-gray-500"
                style={{
                    border: 'none',
                    borderBottom: "2px solid #139dff",
                    borderRadius: "0px",
                    padding: "16px",
                    marginBottom: "12px",
                    outline: 'none',

                }}
                name="name"
                value={formData.name}
                onChange={onChange}
                required


            />
            <button type="button" onClick={nextStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                <FiArrowRight size={30} />
            </button>
            {/* <button type="button" onClick={handleFormSubmit} className="bg-[#139dff] px-5 py-1 rounded-full text-white text-[20px]">
                Submit
            </button> */}
        </div>
    )
}

export default FormStep1


