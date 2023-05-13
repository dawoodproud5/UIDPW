
import React from 'react'
import { MuiTelInput } from 'mui-tel-input'

const PhoneInput = ({ setFormData, formData }) => {
    const [phoneNumber, setPhoneNumber] = React.useState('')

    const handleChange = (newPhoneNumber) => {
        setPhoneNumber(newPhoneNumber)
        setFormData({ ...formData, ["phone"]: newPhoneNumber })
    }
    
    console.log(phoneNumber)
    return (
        <MuiTelInput value={phoneNumber} onChange={handleChange} required defaultCountry="US"/>
    )
}

export default PhoneInput;
