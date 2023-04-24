import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TransEntr from 'app/components/TransactionsEntrantes';
import TransSort from 'app/components/TransactionsSortantes';
// import Header from '../components/header'

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{position: 'relative',}}>
      {/* <Header /> */}
      <Box className="backImg2" width='100%' minHeight='100%' margin="0 auto" sx={{position: "absolute", zIndex: "-1", filter: "brightness(50%)"}}></Box>
      <Box sx={{ width: '100%', height: '100vh !important', mt: '0px', position: 'relative', pt: 12, zIndex: "10"}}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          width: '250px', 
          position: 'absolute', 
          top: "90px",
          left: "64px",
          background: '#fffd',
          border: "3px solid #f8f8ff" 
          }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Entrantes" value="1" />
            <Tab label="Sortantes" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TransEntr />
        </TabPanel>
        <TabPanel value="2">
          <TransSort />
        </TabPanel>
      </TabContext>
    </Box>
    </Box>
    </Box>
  );
}