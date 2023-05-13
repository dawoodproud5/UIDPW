import React from 'react'
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
import SubsSelect from './SubsSelect'
function FormStep4({ formData, onChange, nextStep, prevStep, setFormData }) {
    return (
        <div className='flex flex-col justify-around items-center mx-w-[600px] mx-auto space-y-2'>
            <div className='flex flex-col justify-between items-center gap-8 md:gap-14 '>
                <h1 className='text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-center '>Thank you for Showing Interest in Dawood Proud Services <br /> to take your YouTube Channel to New Heights</h1>
                {/* <h2 className='text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-center text-[#139dff]'>Nice to meet you😊</h2> */}
                <h2 className='text-[18px] sm:text-[20px] md:text-[20px] font-medium text-center '>How many subscribers does your YouTube channel currently have?</h2>
            </div>

            <label htmlFor="Subs"></label>
            <div>

                <SubsSelect value={formData.subs} setFormData={setFormData} formData={formData} />
            </div>

            <div className='flex justify-center items-center gap-4'>
                <button type="button" onClick={prevStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                    <FiArrowLeft size={30} />
                </button>
                <button type="button" onClick={nextStep} className="bg-[#139dff] px-6 py-1 rounded-full text-white">
                    <FiArrowRight size={30} />
                </button>

            </div>

        </div >
    )
}

export default FormStep4