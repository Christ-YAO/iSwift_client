import { Box, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HistoryIcon from '@mui/icons-material/History';

function ProgressData({data }) {
    const {status, bank_name, bic, country, city} = data.event_data;

    // let chargeAmount = data.event_data.charge_amount
    const chargeAmount = data.event_data.charge_amount

    const func = () => {
        if (data.send_date && data.received_date) {
            return <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height:'100%'}}>
                <div style={{color: "#1976d2"}}>
                    <div>
                        <ArrowForwardIcon sx={{fontSize: 30,}} />
                        <AccessTimeIcon sx={{fontSize: 30,}} />
                    </div>
                    <div >
                        {data.received_date}
                    </div>
                </div>
                <div style={{color: "#1976d2"}}>
                    <div>
                        <AccessTimeIcon sx={{fontSize: 30,}} />
                        <ArrowForwardIcon sx={{fontSize: 30,}} />
                    </div>
                    <div>
                        {data.send_date}
                    </div>
                </div>
        </div>
        } else if (data.send_date) {
            return <div style={{color: "#1976d2", display: 'grid', placeContent: 'center', height: '100%'}}>
                <div>
                    <ArrowForwardIcon sx={{fontSize: 30,}} />
                    <AccessTimeIcon sx={{fontSize: 30,}} />
                </div>
                <div>
                    {data.send_date}
                </div>
        </div>
        } 
        if (data.credit_date) {
            return <div style={{color: "#1976d2", display: 'grid', placeContent: 'center', height: '100%'}}>
                <div>
                    <AccessTimeIcon sx={{fontSize: 30,}} />
                    <ArrowForwardIcon sx={{fontSize: 30,}} />
                </div>
                <div>
                    {data.credit_date}
                </div>
            </div>
        } 
    }

        return (
            <Box>
                <Box className='box' bgcolor='#f8f8ff' color="#555" sx={{
                        height: 500, 
                        width: 320,
                        position: 'absolute',
                        marginTop : 2,
                        transform: 'translateX(-38.5%)',
                        borderRadius: 2,
                    }}
                    >
                        <div style={{borderBottom: '1px solid', paddingBottom: 15}}>
                            <h5 style={{display: 'grid', placeContent: 'center',fontSize: '14px', fontWeight: 'bold', height: 60,marginTop: 0, borderRadius: 3, borderBottom: '1px solid', padding: ' 15px 15px 10px 15px', textAlign: 'center', background: '#FFA07A', color: "#fff"}}>{bank_name}</h5>
                            <Typography style={{textTransform: 'uppercase', paddingLeft: 30}}>bic : {bic}</Typography>
                            <div style={{height: 70,display: 'flex', alignItems: 'center', marginTop: 10, paddingLeft: 20}}>
                                <LocationOnIcon sx={{fontSize: 50,}} />
                                <div style={{textTransform: 'uppercase', paddingLeft: 10}}>
                                    <Typography variant='h6'>{country}</Typography>
                                    <Typography>{city}</Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', borderBottom: '1px solid', height: '150px'}}>
                            {func()}
                        </div>
                        <div style={{paddingLeft: '25px', padding: '10px', display: 'flex', flexDirection: 'column',  height: '90px'}}>
                                <Typography>Charge Amounts :</Typography>
                        {chargeAmount.map((item, index) => {
                            return <div key={index}>
                                <Typography sx={{fontWeight: 'bold'}}>{item.amount} {item.currency}</Typography></div>
                        })}
                        </div>
                        <div style={{padding: '10px 20px', borderTop: '1px solid',}}>
                            {data.sender_reference ? 'Sender Reference' : null}
                            <Typography fontWeight='bold'> {data.sender_reference}</Typography>
                        </div>
                    </Box> 
            </Box>
        )
}
export default ProgressData;