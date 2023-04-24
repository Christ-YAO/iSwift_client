import React from 'react';
import {Box, Typography} from "@mui/material";
// import notfounfImg from "app/images/notfoundImg.svg";

export const UetrStatus = (props) => {
    const {img, text} = props;
    return  <Box height='100%'
                 sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
        <Box sx={{display: 'grid', placeContent: 'center'}}>
            <img src={img}/>
        </Box>
        <Box sx={{display: 'grid', placeContent: 'center', maxWidth: 510}}>
            <Typography variant='h2' fontWeight='bold' color='error' textAlign='center'>{text}</Typography>
            <Typography variant='h5' color="#616161" sx={{marginTop: '40px', textAlign: 'center'}}>....</Typography>
        </Box>
    </Box>
}