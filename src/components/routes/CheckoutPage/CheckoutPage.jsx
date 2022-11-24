import { Button, Container,CssBaseline,Paper,Step,StepLabel,Stepper,Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Navbar from "../../HeadSection/Navbar/Navbar";
import AddressForm from "./AddressForm";
import PaymentForm from './PaymentForm';
import ReviewPage from './ReviewPage';
import React from "react";
import { Link } from "react-router-dom";

     


export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const [filledAddressData , setFilledAddressData]=useState([]);
  const [filledPaymentData , setFilledPaymentData]=useState([]);
 

  function filledAData(filedinput){
    setFilledAddressData((prev) => {
      return [...prev , filedinput]
    })
  }
  function filledPData(filedinput){
    setFilledPaymentData((prev) => {
      return [...prev , filedinput]
    })
  }

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);
  
  };
  const onSubmit = (e) => {
    e.preventDefault();
  }; 

  const handleBack = (e) => { 
    e.preventDefault();
    setActiveStep(activeStep - 1);
  };

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm onNext={filledAData} />;
    case 1:
      return <PaymentForm onPayment={filledPData} />;
    case 2:
      return <ReviewPage payments={filledPaymentData} addresses={filledAddressData} />;
    default:
      throw new Error('Unknown step');
  }
}


  return (
    <Box>
      <CssBaseline /> 
     
      <Navbar />
 
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
              <Button variant="contained" sx={{bgcolor:'#7EC948' , marginTop:5}}><Link to='/' style={{textDecoration:'none' , color:'#333'}}>Go Back Home</Link></Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <form onSubmit={onSubmit}>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                  {activeStep === steps.length - 1 ? (
                    <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 3, ml: 1 }}
                  >Place Order</Button>
                  ) : (
                    <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >Next</Button>
                  )}
              </Box>
              </form>
            </React.Fragment>
          )}
        </Paper>
      </Container>

      </Box>
  );
}