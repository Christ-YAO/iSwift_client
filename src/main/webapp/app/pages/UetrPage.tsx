import React, {useState, useEffect} from "react";
import { Box, Container } from '@mui/material';
import {useParams} from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UetrInfo from "app/components/UetrInfo";
import GoBackBtn from "app/components/GoBackBtn";
import Loader from "app/components/Loader";
import {Caller} from "app/components/api/Caller";
import {Config} from "app/components/commons/Config";
// import notfounfImg from "app/images/notfoundImg.svg"
// import errorImg from "app/images/error_icon.png";
import {UetrStatus} from "app/components/UetrStatus";
import Progressbar from "app/components/Progressbar";
// import Header from '../components/header'

const url = 'http://localhost:3000/posts'

function UetrPage() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(data == null)
    const [notFound, isNotFound] = useState(false)
    const {uetr} = useParams()
    // const {TRANSACTION_ENDPOINT, METHOD_GET, HEADER} = Config;
    const [error, hasError] = useState(false)

    // useEffect(() => {
    //     console.log("IN USE EFFECT")
    //     const caller = new Caller();
    //     setLoading(true)
    //     caller.callnow(`${TRANSACTION_ENDPOINT}/${uetr}`,
    //         METHOD_GET)
    //         .then(response => {
    //             setLoading(false);
    //             if (response.status === 404)
    //              isNotFound(true)
    //             else if(response.ok === false) {
    //                 console.log("FAILED", response)
    //                 hasError(true)
    //             }
    //             setData(response)
    //             console.log("SUCCEEDED ", response)
    //         })
    //         .catch(error => {
    //             console.log("ERROR ", error);
    //             setLoading(false);
    //             hasError(true)
    //         })
    // }, []);



    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(url)
            const datas = await response.json()
            setData(datas)
          } catch (err) {
            setLoading(true)
          } finally {setLoading(false)
          }
        }
       fetchData()
        }, []);

    const [uetrValue, setUetrValue] = useState(null)
    const [inputValue, setInputValue] = useState(uetr)
    const handleSubmit = (event) => {
        event.preventDefault()
        setUetrValue(inputValue)
    }


    return (
        <>
            {/* <Header /> */}
            <Box className='uetrpage' bgcolor="#fff" height='120vh' mb="50px" borderRadius='5px'
             sx={{boxShadow: "15px 15px 33px 0px rgba(0,0,0,0.37)",}}>
                <Container maxWidth="xl" sx={{
                    display: {sm: 'flex',},
                    justifyContent: 'space-between',
                    marginTop: '-30px !important',
                    alignItems: 'center',
                    gap: 5,
                    width: '90%',
                }}>
                    <GoBackBtn/>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            maxWidth: 800,
                            width: '100%',
                            // background: "#eee",
                            marginLeft: '-5px !important',
                            display: "flex",
                            flexWrap: "wrap",
                            borderRadius: 1,
                            marginBottom: 1,
                            marginTop: 1,
                            paddingTop: 5,
                            "& > :not(style)": {m: 1, width: "90%"}
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" type='search' label="UETR" variant="outlined" error={error}
                                value={inputValue} onChange={(e) => setInputValue(e.target.value)} required
                                sx={{maxWidth: 600}}/>
                        <Button type="submit" sx={{maxWidth: 150}} variant="contained"
                                onClick={handleSubmit}>Rechercher</Button>
                    </Box>
                </Container>
            {isLoading ?
                <Box sx={{
                    height: "100vh",
                    display: 'grid',
                    placeContent: 'center',
                    marginTop: '-200px'
                }}>
                    <Loader/>
                </Box> :
                <>
            {notFound ?
                <UetrStatus img={"app/images/notfoundImg.svg"} text={"UETR not found"}/> :
                <>
                    {error ?
                        <UetrStatus img={"app/images/error_icon.png"} text={"An error occured"}/> :
                        <>
                                <Box width='90%' margin='0 auto'>
                                    <hr/>
                                    <UetrInfo data={data} />
                                    <hr/>
                                    <Progressbar
                                        data={data}
                                        />
                                </Box>

                        </>
                    }
                </>
            }
           </>
            }
        </Box>
        </>
    )
}

export default UetrPage;