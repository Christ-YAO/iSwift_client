import React from "react";
import { Box, Typography } from '@mui/material';
// import '../App.css';
import Typewriter from "app/components/commons/Typewriter";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
// import Header from '../components/header'

function DemandeValidation() {
    return (
        <Box sx={{position: "relative"}}>
          {/* <Header /> */}
          <Box className="backImg" width='100%' minHeight='100%' margin="0 auto" sx={{position: "absolute", zIndex: "-1", filter: "brightness(50%)"}}></Box>
          <Box padding='50px 0px' width='100%' minHeight='100vh' marginTop='0px !important' margin="0 auto" sx={{zIndex: '10'}}>
        <Typography variant='h1' color='white' fontWeight='bolder' sx={{ml:{xl:10, lg:10, md:10, sm:5, xs:5, width: '100%', color: "#f8f8ff"}}} mt="-30px">DEMANDE</Typography>
        <Typewriter />
        <Box 
            sx={{
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 1, 
                width: {xl: '50%', md: '55%', sm: "80%", xs: "70%"},
                // padding: {xl: '30px', lg: '30px', md: '30px', sm: '20px', xs: '20px'}, 
                border: '1px solid #ff5722', 
                borderRadius: 2, 
                position: 'relative', 
                marginBottom: 5,
                background: "#fffa",
                backdropFilter: 'blur(10px)',
                ml:{xl: 10, lg: 20, md: 10, sm: 5, xs: 2.5}
            }}>
                      <TaskAltIcon sx={{fontSize: '150px', color: '#f8f8ff', background: '#a53816', width: '100%', borderRadius: '0 0 0% 500%',}} />
          <Box sx={{
                    width: '300%', 
                    textAlign: 'center', 
                    // background: '#ff5622e8', 
                    p: '15px', 
                    // color: '#fff',
                    fontSize: '25px',
                    }}>
                      <Typography variant='h5' sx={{mb: 3, color: '#a53816',}}>Demande enregistrée, et retournée à votre banque pour validation</Typography>
                    </Box>
        </Box>
      </Box>
        </Box>
    )
}

export default DemandeValidation;