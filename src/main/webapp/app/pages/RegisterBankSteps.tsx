import React from 'react';
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Step1 from "app/components/register_steps/Step1"
import Step2 from "app/components/register_steps/Step2"
import Step3 from "app/components/register_steps/Step3"
// import Header from '../components/header'

const steps = [
    "Informations générales",
    "Ajouter la banque",
    "Identifiants banquaires"
  ];

function RegisterBankSteps(props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
      <Box sx={{position: 'relative',}}>
        {/* <Header /> */}
        <Box className="backImg5" width='100%' minHeight='100%' margin="0 auto" sx={{position: "absolute", zIndex: "-1", filter: "brightness(50%)"}}></Box>
        <Box bgcolor='transparent' padding='50px 0px' width='100%' minHeight='100vh' marginTop='-20px !important' margin="0 auto" sx={{zIndex: "10"}}>
        <Box sx={{ width:{xl: '50%', lg: '60%', md: '65%', sm: '80%', xs: '90%'}, ml:{xl: 5, lg: 5, md: 5, sm: 5, xs: 2} }}>
        <Stepper sx={{background: "#f8f8ffcc", backdropFilter: "blur(12px)", p: "30px 20px",}} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <>
          { activeStep === 0 ? 
            <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>good {activeStep + 1}</Typography> */}
            <Step1 handleNext={handleNext} />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />  
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
            </Box>
          </React.Fragment> : 
          <>
            { activeStep === 1 ? 
                <React.Fragment>
                {/* <Typography sx={{ mt: 2, mb: 1 }}>good {activeStep + 1}</Typography> */}
                <Step2 handleNext={handleNext} handleBack={handleBack} />
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  {/* <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />  
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button> */}
                </Box>
              </React.Fragment> : <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>good {activeStep + 1}</Typography> */}
            <Step3 handleNext={handleNext} handleBack={handleBack}/>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />  
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
            </Box>
          </React.Fragment>
        }
          </>  
        }
        </>
      </Box>    
      </Box>
      </Box>
    );
}

export default RegisterBankSteps;