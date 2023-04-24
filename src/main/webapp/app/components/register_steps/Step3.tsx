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


function Step3({handleNext, handleBack}) {
    const [infoBanquaire, setInfoBanquaire] = useState([])
    // console.log(infoBanquaire)
    const [guichet, setGuichet] = useState("")
    const [compte, setCompte] = useState("")
    const [checked, setChecked] = useState(false)
    const [cleRib, setCleRib] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().getTime()
        const NumGuichet = guichet
        const NumCompte = compte
        const cleRIB = cleRib


        if (guichet === "" || compte === "" || cleRib === "") {
            return ''
        } else {
            setInfoBanquaire([{id, NumGuichet, NumCompte, cleRIB}, ...infoBanquaire])
            // setTypeID('')
            // setNumID('')
            // ibans.push(inputValue)
        }
      }


    return <Box sx={{display: "flex", flexWrap: 'wrap'}}>
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
                    }}>Identifiants banquaires</Box>
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
                  <TextField color="primary" value={guichet} onChange={(e) => setGuichet(e.target.value)} label="N° Guichet" variant="outlined" required sx={{ flex: '1 1 20%'}} focused/>
                  <TextField color="primary" value={compte} onChange={(e) => setCompte(e.target.value)} label="N° de Compte" variant="outlined" required sx={{ flex: '1 1 40%'}} focused/>
                  <TextField color="primary" value={cleRib} onChange={(e) => setCleRib(e.target.value)} label="Clé RIB" variant="outlined" required sx={{ flex: '1 1 10%'}} focused/>
                  <Typography sx={{textAlign: 'center', fontWeight: 'bold'}}>OU</Typography>
                  <TextField type="file" color="primary"  label="Joindre RIB" variant="outlined" sx={{ flex: '1 1 100%'}} focused/>
                  {/* <FormControlLabel onClick={(event) => setChecked(event.target.checked)} control={<Checkbox />} label="J'accepte toutes les conditions" /> */}

                  <Button sx={{ height: 55, flex: '1 1 20%', fontSize: 14, fontWeight: 'bold', background: "#a53816"}} variant="contained" onClick={handleBack}>back</Button>
                  
                  {guichet === "" || compte === "" || cleRib === "" ? 
                    <Button disabled type="submit" sx={{ height: 55, flex: '1 1 70%', fontSize: 14, fontWeight: 'bold',}} variant="contained" color="primary">Veuillez remplir tous les champs</Button> 
                    : 
                    <Button type="submit" sx={{ height: 55, flex: '1 1 70%', fontSize: 14, fontWeight: 'bold'}} variant="contained" color="primary" onClick={handleNext}><Link href="/demande_validation" sx={{ height: 55, flex: '1 1 100%', fontSize: 14, fontWeight: 'bold', color: '#f8f8ff', textDecoration: 'none', mt: 4,'&:hover': {
                        color: '#f8f8ff',
                      },}}>S'identifier</Link></Button>
                  }
              </Box>
            </Box>
        </Box>
        <Box><Typography variant="h2" sx={{position:{xl: "absolute", lg: "absolute"}, mt:{xl: 20, lg: 20, md: 5, sm: 5, xs: 5}, color: '#f8f8ff', maxWidth: '650px', textAlign: 'center', fontWeight: "bold"}}>Identifiez-vous auprès de votre banque</Typography></Box>
    </Box>
}

export default Step3;