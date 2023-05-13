
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const valueOptions = [
    " Brand New YouTube Channel with No Subscribers",
    "Less than 1000",
    "  1,000 - 10,000",
    " 10,001 - 25,000",
    " 25,001 - 50,000",
    "   50,001 - 100,000",
    "100,001 - 500,000",
    " 500,001 - 1 Million",
    "1 Million - 5 Million",
    " 5 Million - 10 Million",

];

export default function SelectSmall({ setFormData, value, formData }) {
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFormData({ ...formData, ["subs"]: value })
     
    }



    return (
        <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
            <InputLabel id="demo-select-small-label">Subscribers</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={value}
                label="Subscribers"
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