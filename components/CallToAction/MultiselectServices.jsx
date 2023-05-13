import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { color } from '@mui/system';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import { Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';



const ITEM_HEIGHT = 32;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: "50%",
            overflowY: 'auto',
            maxHeight: '200px',
        },
    },
};

const names = [
    "Certified YouTube Consulting",
    "YouTube Niche Selection",
    "YouTube Content Creation",
    "YouTube Keywords Research",
    "YouTube SEO",
    "YouTube Automation",
    "YouTube Channel Monetization",
    "YouTube Promotion",
    "YouTube ADs",
    "YouTube Channel Management",
    "Others",
    "Select All"
];



export default function MultipleSelect({ setFormData, value, formData }) {


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFormData({ ...formData, ['services']: value })
    }




    return (
        <div>
            <FormControl sx={{ m: 0, minWidth: "280px", maxWidth: "95%", margin: "auto", flexWrap: 'wrap', }} shrink={true}  >
                <InputLabel id="demo-multiple-name-label" className='text-sm'>Services</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name='services'
                    multiple
                    value={value}
                    onChange={handleChange}
                    required
                    input={<OutlinedInput label="Service" />}
                    renderValue={(selected) => (
                        <Typography sx={{
                            display: 'flex', overflowY: "auto",
                            '@media (min-width: 320px)': {
                                flexDirection: 'column',
                                maxWidth: '80%',
                                marginX: "auto",
                                gap: '0.5rem',
                                flexWrap: 'wrap',
                            },
                            '@media (min-width: 768px)': {
                                flexDirection: 'row',
                                maxWidth: '95%',
                                flexWrap: 'wrap',
                            },


                        }}>
                            {selected.map((value) => (
                                <Chip
                                    key={value}
                                    label={value}

                                    // onDelete={handleDelete}
                                    deleteIcon={<CancelIcon className=' rounded-full' color='white' />}
                                    sx={{
                                        color: 'white', backgroundColor: '#247ddd', mr: 0.5,
                                    }}
                                />
                            ))}
                        </Typography>
                    )}
                    MenuProps={MenuProps}
                    sx={{ color: 'red', fontWeight: 'normal', maxWidth: "900px", }}
                >

                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            sx={{
                                backgroundColor: "#fffff", color: "black", font: "18px", '&:hover': {
                                    backgroundColor: 'black', color: "white",
                                },
                            }}

                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}