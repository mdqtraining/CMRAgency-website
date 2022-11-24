import { Typography , Grid , TextField , FormControlLabel , Checkbox} from "@mui/material";
import React, { useState } from "react";

export default function PaymentForm(props) {

    
  const[paymentFormData , setPaymentFormData] = useState({
    cardName:'',
    cardNumber:'',
    expDate :'',
    cvv:'',
  });
  
  const handleChangePayment = (e) =>{
    const{name , value} = e.target;
    setPaymentFormData({...paymentFormData, [name]:value});
    props.onPayment(paymentFormData);
  }


    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              name='cardName'
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              onChange={handleChangePayment}
              value={paymentFormData.cardName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              name = 'cardNumber'
              label="Card number"
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
      </React.Fragment>
    );
  }