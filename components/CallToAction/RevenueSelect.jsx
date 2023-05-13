
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const valueOptions = [
    " Brand New YouTube Channel with no Revenue Generation",
    "  $1 - $100",
    " $101 - $1,000",
    "  $1,001 - $10,000",
    "  $10,001 - $25,000,",
    " $25,000 - $50,000",
    " $50,000+",

];

export default function SelectSmall({ setFormData, value, formData }) {
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFormData({ ...formData, ["revenue"]: value })
        console.log(value);
    }



    return (
        <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
            <InputLabel id="demo-select-small-label">Revenue</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={value}
                label="Revenue"
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