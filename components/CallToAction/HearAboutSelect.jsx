
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const valueOptions = [
    "Google Search",
    "Ali Abdaal YouTube Channel",
    "Referral",
    "Facebook Ads",
    " Trustpilot",
    "Google Reviews",
    " Review Sites",
    " Others",

];

export default function SelectSmall({ setFormData, value, formData }) {
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFormData({ ...formData, ["hearaboutus"]: value })
        console.log(value);
    }



    return (
        <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
            <InputLabel id="demo-select-small-label">Please Select</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={value}
                label="Please Select"
                onChange={handleChange}
                required
            >
                {valueOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}