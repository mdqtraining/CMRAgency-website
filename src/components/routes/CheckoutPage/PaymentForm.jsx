import { Typography , Grid , TextField , FormControlLabel , Checkbox} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function PaymentForm(props) {


  function getFormValues() {
    const storedValues = localStorage.getItem('paymentForm');
    if (!storedValues)
      return {
        cardName:'',
    cardNumber:'',
    expDate :'',
    cvv:'',
      };
    return JSON.parse(storedValues);
  }
    
  const[paymentFormData , setPaymentFormData] = useState(getFormValues);
  
 useEffect(()=>{
  localStorage.setItem('paymentForm', JSON.stringify(paymentFormData));
 },[paymentFormData])

  const handleChangePayment = (e) =>{
    const{name , value} = e.target;
    setPaymentFormData({...paymentFormData, [name]:value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.onPayment(paymentFormData);
    props.handleNext();
  }


    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <form id='form-step1' onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              name='cardName'
              label="Name on card"
              type='text'
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              onChange={handleChangePayment}
              defaultValue={paymentFormData.cardName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              name = 'cardNumber'
              label="Card number"
              type='tel'
              inputProps={{pattern:"[0-9]{13,19}"}}
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              onChange={handleChangePayment}
              value={paymentFormData.cardNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              name="expDate"
              label="Expiry date"
              type='date'
              InputLabelProps={{shrink: true}}
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              onChange={handleChangePayment}
              value={paymentFormData.expDate}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              name="cvv"
              label="CVV"
             type='tel'
             inputProps={{pattern:"[0-9]{3,4}"}}
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
              onChange={handleChangePayment}
              value={paymentFormData.cvv}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
        </form>
      </React.Fragment>
    );
  }