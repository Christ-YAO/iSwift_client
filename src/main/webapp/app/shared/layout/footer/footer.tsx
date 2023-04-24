import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import Logo from 'app/components/commons/Logo'


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Toolbar sx={{p: "50px 10px 15px 10px", display: 'block', width: '100%', m: '0 auto', bgcolor: "#a53816", color: "#f8f8ff"}}>
        <Box sx={{display: 'flex', justifyContent: 'space-around', flexWrap:'wrap', maxWidth: '100%', width: '80%', m: '0 auto'}}>
          <Box sx={{width:{xl: '700px', lg: '510px'}, m: '0 auto',}}>
            <Logo />
            <Typography width='400px' mt="40px !important" mb="40px !important">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptates.</Typography>
          </Box>
          <Box className="footer" sx={{flex: '1 1 0%',display: 'flex', justifyContent: 'space-around', columnGap: 5,}}>
            <Box>
              <Typography variant='h6' color="#000" fontWeight="500">Menu</Typography>
              <ul>
                <li><a href='/'>Bank</a></li>
                <li><a href='/'>Ajouter bank</a></li>
                <li><a href='/'>Transactions</a></li>
              </ul>
            </Box>
            <Box>
              <Typography variant='h6' color="#000" fontWeight="500">Information Complémentaire</Typography>
              <ul>
                <li><a href='/'>Termes & Conditions</a></li>
                <li><a href='/'>Politique de confidantialité</a></li>
              </ul>
            </Box>
          </Box>
        </Box><hr />
        <Box><Typography variant='h6' sx={{textAlign: 'center'}}>&copy; 2023 Plateforme iSwift</Typography></Box>
      </Toolbar>
    </React.Fragment>
  );
}