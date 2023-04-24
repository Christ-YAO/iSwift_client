import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import HistoryIcon from '@mui/icons-material/History';
import UetrData from 'app/components/UetrData';
import { Box } from '@mui/material';
import styled from 'styled-components'


const Illustration = styled.img`
  max-width: 700px;
  width: 70%;
  margin: 60px auto !important;
  margin: 0 auto;
`

function Progressbar({ data }) {
    const senderData = (data.sender_data)
    const receiverData = (data.receiver_data)
    const intermediaryData = (data.intermediary_data)

    {/*   if (uetrValue.length === 0) {
        return <Box height= '100%' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    <Box sx={{display: 'grid', placeContent: 'center', maxWidth: 510}}>
                        <Typography variant='h2'  fontWeight='bold' color='#115293' textAlign='center'>Search For A UETR</Typography>
                        <Typography variant='h5' color="#616161" sx={{marginTop: '40px', textAlign: 'center'}}>Search Now ...</Typography>
                    </Box>
                    <Box sx={{display: 'grid', placeContent: 'center'}}>
                        <Illustration src={search} />
                    </Box>
                </Box>
    } 
*/}
    return <>
        {senderData &&
        <Box className='progressbar'>
            <Box className="line"></Box>
                    <Box className='circles'>
                        <Box className='circle'>
                            {senderData.event_data.status !== 'Completed' ? <HistoryIcon sx={{color: 'grey', fontSize: 30}}/> : <DoneIcon sx={{color: 'green', fontSize: 30}}/>}
                        </Box>
                        <UetrData data={senderData} />
                    </Box>
                    {intermediaryData.map((intermediary, index) => {
                       return <Box key={index} className='circles'>
                                <Box className='circle'>
                                    {intermediary.event_data.status !== 'Completed' ? <HistoryIcon sx={{color: 'grey', fontSize: 30}}/> : <DoneIcon sx={{color: 'green', fontSize: 30}}/>}
                                </Box>
                                <UetrData data={intermediary} />
                            </Box>
                    })}
                    <Box className='circles'>
                        <Box className='circle'>
                            {receiverData.event_data.status !== 'Completed' ? <HistoryIcon sx={{color: 'grey', fontSize: 30}}/> : <DoneIcon sx={{color: 'green', fontSize: 30}}/>}
                        </Box>
                        <UetrData data={receiverData} />
                    </Box>
        </Box>
        }
    </>
}
export default Progressbar;