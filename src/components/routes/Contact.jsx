import Header from "../HeadSection/Header/Header";
import Footer from '../FootSection/Footer/Footer';
import Navbar from '../HeadSection/Navbar/Navbar';
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

export default function Contact () {

  const [contactForm, setContactForm]= useState({
    name :'',
    email:'',
    phone:'',
    company:'',
    country:'',
    city:''
  });
  const form = useRef();
  function handleChange(e){
    const{name, value}=e.target;
    setContactForm({...contactForm , [name]:value});
  }

  function sendForm(e){
    e.preventDefault();
    emailjs.sendForm('service_szodhjv', 'template_wrdx1fl', form.current, '0lVH7svAZeBNdlCRA');

    setContactForm({
      name :'',
      email:'',
      phone:'',
      company:'',
      country:'',
      city:''
    })
  };

  return (
    <div>
      <Header />
      <Navbar />

      {/* contact layout 1 */}

      <Grid container  mt={2} >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Container>
          <Box padding={5} bgcolor='#efefef'>
          <Typography variant="h5" color="initial" fontSize={30}>Contact Us</Typography>
          </Box>
          </Container>
        </Grid>
      </Grid>

      {/* contact Page layout 2 */}

      <Grid container mt={10}>
        <Grid item xs={11} sm={11} md={11} lg={7}>
          <Box>
            <Typography align="center" variant="h5" fontSize={30} fontWeight={400} marginBottom={8} sx={{color:'#4db6ac'}}>Get In Touch With Us</Typography>
          <Stack
        component="form"
        sx={{
          marginBottom:5
        }}
        spacing={2}
        noValidate
        autoComplete="off"
        textAlign='left'
        marginLeft={5}
        ref={form}
        onSubmit={sendForm}
        id='contactForm'
      >
         <Typography color='initial' fontWeight={600}>Name *</Typography>

          <TextField
            htmlFor="Name"
            size='small'
            id="name"
            name='name'
            type='text'
            value={contactForm.name}
            onChange={handleChange}
            sx={{":focus":{borderColor:'#7EC948' , border:'none'}}}
          />
             <Typography color='initial' fontWeight={600}>Email *</Typography>

          <TextField
          size='small'
            id="email"
            name='email'
            type='email'
            value={contactForm.email}
            onChange={handleChange}
          />
             <Typography color='initial' fontWeight={600}>Phone *</Typography>

        <TextField
        size='small'
            id="phone"
            name="phone"
            type='tel'
            value={contactForm.phone}
            onChange={handleChange}
          />
             <Typography color='initial' fontWeight={600}>Company *</Typography>

        <TextField
        size='small'
            id="company"
            name="company"
            type='text'
            value={contactForm.company}
            onChange={handleChange}
          />
             <Typography color='initial' fontWeight={600}>Country *</Typography>

           <TextField
        size='small'
            id="country"
            name="country"
            type='text'
            value={contactForm.country}
            onChange={handleChange}
          />
             <Typography color='initial' fontWeight={600}>City *</Typography>

           <TextField
        size='small'
            id="city"
            name="city"
            type='text'
            value={contactForm.city}
            onChange={handleChange}
          />

         <Button type='submit' form='contactForm' variant="contained" sx={{bgcolor:'#7EC948' , width:200}}>Submit</Button>
      </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={5}>
          <Box bgcolor='#e9e7e7' width={400} padding={5} marginLeft={5} mt={15} className="address-box">
            <Typography variant="h6" sx={{color:'#4db6ac', fontSize:25}} mb={3}>Address</Typography>
            <Typography variant="subtitle1" lineHeight={2}>No:9, Venkatesh Perumal Street, 8th cross street, Ram Nagar (South) Madipakkam, Chennai - 600 091.</Typography>
          </Box>
          <Box mt={4} bgcolor='#e9e7e7' width={400} padding={2} marginLeft={5} className="map-box">
            <Typography variant="h6" sx={{color:'#616161', fontSize:20}}>Our Location</Typography>
          <iframe className="map" width="350" height="250" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" title="map" src="https://maps.google.com/maps?width=400&amp;height=250&amp;hl=en&amp;q=No:9,%20Venkatesh%20Perumal%20Street,%20off%208th%20cross%20street,%20Ram%20Nagar%20Chennai+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </Box>
        </Grid>
      </Grid>
      <Divider  />
      <Footer />
    </div>
  )
}
