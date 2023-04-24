import React, { useState } from "react";
import { Box, Link, Typography } from '@mui/material';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from '@mui/material/Autocomplete';
import '../../App.css';
import Typewriter from "../commons/Typewriter";
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { data } from '../data/Data.js';


function Step1({handleNext}) {
    const [infoGenerale, setInfoGenerale] = useState([
        {
            id: 1,
            name: "YAO",
            firstName: 'christ',
            country: 'côte d\'ivoire',
            city: 'Abidjan',
            email: 'yao@email.com',
            telephone: '0101607079'
        },
    ])
    // console.log(infoGenerale)
    const [name, setName] = useState("")
    const [firstName, setFirstName] = useState("")
    // const [country, setCountry] = useState("")
    // const [city, setCity] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [typeID, setTypeID] = useState("")
    const [NumID, setNumID] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().getTime()
        const typePiece = typeID
        const NumPiece = NumID


        if (typeID === "" || NumID === "") {
            return ''
        } else {
            setInfoGenerale([{id, typePiece, NumPiece}, ...infoGenerale])
            // setTypeID('')
            // setNumID('')
            // ibans.push(inputValue)
        }
      }


    return (
        <Box 
            sx={{
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 1, 
                width: '90%',
                padding: {xl: '30px', lg: '30px', md: '30px', sm: '20px', xs: '20px'}, 
                border: '1px solid #ff5722', 
                borderRadius: 2, 
                position: 'relative', 
                marginBottom: 5,
                margin: "0 auto",
                mt: 5,
                background: "#fffa",
                backdropFilter: "blur(12px)",
            }}>
          <Box sx={{
                    width: '100%', 
                    textAlign: 'center', 
                    background: '#a53816', 
                    p: '15px', 
                    color: '#fff',
                    mb: 3,
                    fontSize: '25px',
                    }}>Informations générales</Box>
          <Box sx={{flex: '1 1 0%',}}>
              <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                  width: 370,
                  minWidth: '100%',
                  // maxHeight: '30%',
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": { m: 1, width: "90%" }
                  }}
                  noValidate
                  autoComplete="off"
              >
                  <TextField color="primary" value={name} onChange={(e) => setName(e.target.value)} label="Nom" variant="outlined"  required sx={{ flex: '1 1 100%'}} focused disabled/>
                  <TextField color="primary" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="Prénom" variant="outlined"  required sx={{ flex: '1 1 100%'}} focused disabled/>
                  <TextField color="primary" type="mail" value={mail} onChange={(e) => setMail(e.target.value)} label="Email" variant="outlined"  required sx={{ flex: '1 1 100%'}} focused disabled/>
                  <TextField color="primary" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} label="Téléphone" variant="outlined"  required sx={{ flex: '1 1 100%'}} focused disabled/>
                  {/* <Autocomplete
                      inputValue={country}
                      onInputChange={(e7, newInputValue) => {
                        setCountry(newInputValue);
                      }}
                      id="country-select-demo"
                      sx={{ width: 280, flex: '1 1 15%' }}
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <img
                              loading="lazy"
                              width="20"
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                          </Box>
                      )}
                      renderInput={(params) => (
                          <TextField variant="outlined" color="primary" value={country} onChange={(e) => setCountry(e.target.value)} sx={{width: '100%'}}
                          {...params}
                          label="Pays"
                          inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                          focused/>
                      )}
                  />
                  <TextField color="primary" value={city} onChange={(e) => setCity(e.target.value)} label="Ville" variant="outlined" required sx={{ flex: '1 1 10%'}} focused/>
                  <FormControlLabel onClick={(event) => setChecked(event.target.checked)} control={<Checkbox />} label="J'accepte toutes les conditions" /> */}
                  <Autocomplete
                    value={typeID}
                    onChange={(event, newValue) => {
                    setTypeID(newValue);
                    }}
                    // inputValue={typeID}
                    // onInputChange={(event, newInputValue) => {
                    // setTypeID(newInputValue);
                    // }}
                    id="controllable-states-demo"
                    options={options}
                    sx={{ width: 280, flex: '1 1 0%'  }}
                    renderInput={(params) => <TextField {...params} label="Type de pièce" focused/>}
                />
                  <TextField color="primary" value={NumID} onChange={(e) => setNumID(e.target.value)} label="N° de la pièce" variant="outlined" required sx={{ flex: '1 1 10%'}} focused/>
                  <TextField type="file" color="primary"  label="Joindre pièce" variant="outlined" sx={{ flex: '1 1 100%'}} focused required/>
                  <br />
                  {typeID === "" || NumID === ""? 
                    <Button disabled type="submit" sx={{ height: 55, flex: '1 1 100%', fontSize: 14, fontWeight: 'bold',}} variant="contained" color="primary">Veuillez remplir tous les champs</Button> 
                    : 
                    <Button type="submit" sx={{ height: 55, flex: '1 1 100%', fontSize: 14, fontWeight: 'bold'}} variant="contained" color="primary" onClick={handleNext}>Valider</Button>
                  }
              </Box>
            </Box>
        </Box>
    )
}

export default Step1;

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const options = ['Carte Nationale', 'Passeport', "Permis de conduire", 'Autres'];