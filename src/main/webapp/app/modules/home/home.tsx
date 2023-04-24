// import './home.scss';

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Translate } from 'react-jhipster';
// import { Row, Col, Alert } from 'reactstrap';

// import { useAppSelector } from 'app/config/store';

// export const Home = () => {
//   const account = useAppSelector(state => state.authentication.account);

//   return (
//     <Row>
//       <Col md="3" className="pad">
//         <span className="hipster rounded" />
//       </Col>
//       <Col md="9">
//         <h2>
//           <Translate contentKey="home.title">Welcome, Java Hipster!</Translate>
//         </h2>
//         <p className="lead">
//           <Translate contentKey="home.subtitle">This is your homepage</Translate>
//         </p>
//         {account?.login ? (
//           <div>
//             <Alert color="success">
//               <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
//                 You are logged in as user {account.login}.
//               </Translate>
//             </Alert>
//           </div>
//         ) : (
//           <div>
//             <Alert color="warning">
//               <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>

//               <Link to="/login" className="alert-link">
//                 <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
//               </Link>
//               <Translate contentKey="global.messages.info.authenticated.suffix">
//                 , you can try the default accounts:
//                 <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
//                 <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
//               </Translate>
//             </Alert>
//           </div>
//         )}
//         <p>
//           <Translate contentKey="home.question">If you have any question on JHipster:</Translate>
//         </p>

//         <ul>
//           <li>
//             <a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.homepage">JHipster homepage</Translate>
//             </a>
//           </li>
//           <li>
//             <a href="https://stackoverflow.com/tags/jhipster/info" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.stackoverflow">JHipster on Stack Overflow</Translate>
//             </a>
//           </li>
//           <li>
//             <a href="https://github.com/jhipster/generator-jhipster/issues?state=open" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.bugtracker">JHipster bug tracker</Translate>
//             </a>
//           </li>
//           <li>
//             <a href="https://gitter.im/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.chat">JHipster public chat room</Translate>
//             </a>
//           </li>
//           <li>
//             <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.follow">follow @jhipster on Twitter</Translate>
//             </a>
//           </li>
//         </ul>

//         <p>
//           <Translate contentKey="home.like">If you like JHipster, do not forget to give us a star on</Translate>{' '}
//           <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
//             GitHub
//           </a>
//           !
//         </p>
//       </Col>
//     </Row>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { data } from '../data/Data.js';
// import Typewriter from '../components/commons/Typewriter.jsx';
// import Header from '../components/header'
import Header from 'app/shared/layout/header/header';
import Typewriter from 'app/components/commons/Typewriter'

function Home() {
  const [clients, setClients] = useState([
    {
      id: 1,
      account: "1265-547388578393-07",
      bank: "CREDIT AGRICOLE",
      country: "FRANCE",
      city: "ANNECY LE VIEUX"
    },
    {
      "id": 2,
      "account": "1265-547388578394-07",
      "bank": "ATTIJARIWAFA BANK (FORMERLY BANQUE COMMERCIALE DU MAROC)",
      "country": "MOROCCO",
      "city": "CASABLANCA"
    },
    {
      "id": 3,
      "account": "1265-547388578395-07",
      "bank": "DEUTSCHE BANK TRUST COMPANY AMERICAS",
      "country": "UNITED STATES OF AMERICA",
      "city": "NEW YORK,NY"
    }
  ]);
  // console.log(clients)
  const [search, setSearch] = useState('');
  return (
    <Box sx={{position: 'relative',}}>
    {/* <Header /> */}
      <Box className="backImg3" width='100%' minHeight='100%' margin="0 auto" sx={{position: "absolute", zIndex: "-1", filter: "brightness(50%)"}}></Box>
      <Box padding='50px 0px' width='100%' minHeight='100vh' marginTop='-20px !important' margin="0 auto" sx={{zIndex: "1"}}>
      {/* <h1 style={{color: '#fff', width: '100%', fontSize: '17px', fontWeight: 'bold', padding: '0px 0px 10px', marginBottom: '-20px', marginTop: '-40px', marginLeft: '40px',}}>Liste de vos banques</h1> */}
      <br />
      <Typography variant='h1' color='white' fontWeight='bolder' ml="75px" mt="-10px" sx={{color: "#f8f8ff"}}>mes banques</Typography>
      <Typewriter />
      <Box 
        sx={{
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
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
            />
          </InputGroup>
        {/* </Form> */}
        <Table style={{maxWidth: '100%'}} striped /*bordered*/ hover>
          <thead>
            <tr>
              <th>N° de Compte</th>
              <th>Banque</th>
              <th>Pays</th>
              <th>Ville</th>
            </tr>
          </thead>
          <tbody>
            {clients
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.bank.toLowerCase().includes(search) || item.account.includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td style={{minWidth: 200}}>{item.account}</td>
                  <td style={{width: 400}}><Link href='/transactions'>{item.bank}</Link></td>
                  <td style={{width: 150}}>{item.country}</td>
                  <td>{item.city}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Box>
    </Box>
    </Box>
  );
}

export default Home;
