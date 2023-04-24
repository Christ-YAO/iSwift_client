import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Box, Typography } from '@mui/material';

function Typewriter(props) {
    const [ text ] = useTypewriter({
      words: ['Vivez une expérience fiable et sécurisé', 'Et profitez de cette innovation'],
      loop: {},
      typeSpeed: 120,
      deleteSpeed: 80,
    })
  
    return <Box sx={{ml:{xl:10, lg:10, md:10, sm:5, xs:5}, width: "100%"}}>
      <Typography sx={{margin: '25px 0',}}>
          <span style={{fontSize: '40px', color: 'orange'}}>{text}</span>
          <span style={{fontSize: '40px', fontWeight: 'bold', color: "red"}}>
              <Cursor cursorStyle="/" />
          </span>
      </Typography>
    </Box>
}

export default Typewriter;