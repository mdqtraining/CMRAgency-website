import { Typography , Grid , TextField , FormControlLabel, Checkbox} from "@mui/material";
import React, { useState } from "react";

export default function AddressForm(props) {

    const[addressFormData , setAddressFormData] = useState({
        firstName :'',
        lastName:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
        country:'',
      });

      const handleChangeAddress = (e) =>{
        const{name , value} = e.target;
        setAddressFormData({...addressFormData, [name]:value});
        props.onNext(addressFormData);
      }

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
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
      </React.Fragment>
    );
  }