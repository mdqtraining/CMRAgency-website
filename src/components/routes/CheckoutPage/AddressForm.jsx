import { Typography , Grid , TextField , FormControlLabel, Checkbox} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';


export default function AddressForm(props) {



  const form = useRef();
  function getFormValues() {
    const storedValues = localStorage.getItem('addressForm');
    if (!storedValues)
      return {
        firstName :'',
        lastName:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
        country:'',
      };
    return JSON.parse(storedValues);
  }


    const[addressFormData , setAddressFormData] = useState(getFormValues);

      const handleChangeAddress = (e) =>{
        const{name , value} = e.target;
        setAddressFormData({...addressFormData, [name]:value});

        
      }
          useEffect(()=>{
            localStorage.setItem('addressForm', JSON.stringify(addressFormData));
          },[addressFormData]);

      const handleSubmit = (e) =>{
        e.preventDefault();
        props.onNext(addressFormData);
        props.handleNext(); 

        
    emailjs.sendForm('service_szodhjv', 'template_ur77ke4', form.current, '0lVH7svAZeBNdlCRA');
      }

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <form id='form-step0' onSubmit={handleSubmit} ref={form}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              type='text'
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={handleChangeAddress}
              value={addressFormData.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              type='text'
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={handleChangeAddress}
              value={addressFormData.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              type='text'
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              onChange={handleChangeAddress}
              value={addressFormData.address1}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              type='text'
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              onChange={handleChangeAddress}
              value={addressFormData.address2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              type='text'
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              onChange={handleChangeAddress}
              value={addressFormData.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             required
              id="state"
              name="state"
              label="State/Province/Region"
              type='text'
              fullWidth
              variant="standard"
              onChange={handleChangeAddress}
              value={addressFormData.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              type='number'
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              onChange={handleChangeAddress}
              value={addressFormData.zip}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              type='text'
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              onChange={handleChangeAddress}
              value={addressFormData.country}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
        </form>
      </React.Fragment>
    );
  }