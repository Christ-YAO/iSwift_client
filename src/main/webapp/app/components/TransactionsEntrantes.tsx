import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [transaction, setTransaction] = useState([
    {
      id: 1,
      date: '01-04-2023',
      uetr: 'e5d0a26-37c0-42bf-916d-7b70ba59713c',
      type: 'virement',
      status: 'Completed',
      bank_emetrice: 'CREDIT AGRICOLE',
      bank_receptrice: 'CREDIT AGRICOLE',
    },
    {
      id: 2,
      date: '02-04-2023',
      uetr: 'c77ebda6-9c80-47e1-baa1-22c4455245d5',
      type: 'virement',
      status: 'In progress',
      bank_emetrice: 'CREDIT AGRICOLE',
      bank_receptrice: 'CREDIT AGRICOLE',
    },
    {
      id: 3,
      date: '03-04-2023',
      uetr: '8a3c03e6-7eba-4646-8259-3fb1cb11c62e',
      type: 'virement',
      status: 'Blocked',
      bank_emetrice: 'ATTIJARIWAFA BANK (FORMERLY BANQUE COMMERCIALE DU MAROC)',
      bank_receptrice: 'ATTIJARIWAFA BANK (FORMERLY BANQUE COMMERCIALE DU MAROC)',
    },
    {
      id: 4,
      date: '04-04-2023',
      uetr: 'b9c917b1-e2ad-4b3f-8a6a-6ddae535517e',
      type: 'virement',
      status: 'Rejected',
      bank_emetrice: 'ATTIJARIWAFA BANK (FORMERLY BANQUE COMMERCIALE DU MAROC)',
      bank_receptrice: 'ATTIJARIWAFA BANK (FORMERLY BANQUE COMMERCIALE DU MAROC)',
    },
    {
      id: 5,
      date: '05-04-2023',
      uetr: '4a79684e-668d-48d0-97f5-ff3e6fe809e2',
      type: 'virement',
      status: 'En attente',
      bank_emetrice: 'DEUTSCHE BANK TRUST COMPANY AMERICAS',
      bank_receptrice: 'DEUTSCHE BANK TRUST COMPANY AMERICAS',
    }
  ]);
  const [search, setSearch] = useState('');

  return (
    <Box padding='50px 0px' width='100%' minHeight='115vh' margin="0 auto" >
    <h1 style={{color: '#f8f8ff', background: "#a53816", width: '320px', fontSize: '17px', padding: '10px', marginBottom: '55px', marginTop: '-150px', marginLeft: '40px', border: '1.5px solid #f8f8ff', borderRadius: "5px 20px 20px 5px"}}>Transactions > Transactions entrantes</h1><br />
      <Box sx={{
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1, 
            maxWidth: '100vw', 
            width: {xl: '60%', md: '95%', sm: "98%", xs: "98%"}, 
            background: '#fffd', 
            padding: {xl: '5px 40px', lg: '50px', md: '50px', sm: '40px', xs: '20px'}, 
            border: '5px solid #f8f8ff', 
            borderRadius: 1,
            ml: 5
        }}>
        {/* <Form> */}
          <InputGroup>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Recherche'
            />
          </InputGroup>
        {/* </Form> */}
        <Table style={{maxWidth: '100%'}} striped bordered hover>
          <thead>
            <tr>
              <th style={{minWidth: 105,}}>Date</th>
              <th style={{minWidth: 200,}}>UETR</th>
              <th style={{minWidth: 120,}}>Status</th>
              <th>Banque Emetrice</th>
            </tr>
          </thead>
          <tbody>
            {transaction
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.date.toLowerCase().includes(search) || item.uetr.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td><Link href={`/uetrpage/${item.uetr}`}>{item.uetr}</Link></td>
                  {item.status === "Completed" ? 
                        <td style={{color: 'green'}}>{item.status}</td> :
                        <>
                          {item.status === "Rejected" ? 
                           <td style={{color: 'red'}}>{item.status}</td> :
                           <td style={{color: 'orange'}}>{item.status}</td>}
                        </> 
                        
                        }
                  <td style={{width: 450, fontSize: '12px'}}>{item.bank_emetrice}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default App;
