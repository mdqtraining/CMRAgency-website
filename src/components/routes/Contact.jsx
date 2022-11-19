import Header from "../HeadSection/Header/Header";
import Footer from '../FootSection/Footer/Footer';
import Navbar from '../HeadSection/Navbar/Navbar';
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";

const location = {
  address: 'No:9, Venkatesh Perumal Street, 8th cross street, Ram Nagar (South) Madipakkam, Chennai - 600 091.',
  lat: 12.962910,
  lng: 80.214350,
}

export default function Contact () {
  return (
    <div>
      <Header />
      <Navbar />

      {/* contact layout 1 */}

      <Grid container  mt={2} >
        <Grid xs={12} sm={12} md={12} lg={12}>
          <Container>
          <Box padding={5} bgcolor='#efefef'>
          <Typography variant="h5" color="initial" fontSize={30}>Contact Us</Typography>
          </Box>
          </Container>
        </Grid>
      </Grid>

      {/* contact Page layout 2 */}

      <Grid container mt={10}>
        <Grid xs={12} sm={12} md={12} lg={7}>
          <Box>
            <Typography align="center" variant="h5" fontSize={30} fontWeight={400} marginBottom={8} sx={{color:'#4db6ac'}}>Get In Touch With Us</Typography>
          <Stack
        component="form"
        sx={{
          width: '80ch',
          marginBottom:5
        }}
        spacing={2}
        noValidate
        autoComplete="off"
        textAlign='left'
        marginLeft={10}
      >
         <Typography color='initial' fontWeight={600}>Name *</Typography>
          <TextField
          htmlFor="Name"
            size='small'
            id="outlined-bsic"
            defaultValue=""
            sx={{":focus":{borderColor:'#7EC948' , border:'none'}}}
          />
             <Typography color='initial' fontWeight={600}>Email *</Typography>
          <TextField
          size='small'
            id="inputEmail"
            defaultValue=""
          />
             <Typography color='initial' fontWeight={600}>Phone *</Typography>
        <TextField
        size='small'
            id="inputMobile"
            defaultValue=""
          />
             <Typography color='initial' fontWeight={600}>Company *</Typography>
        <TextField
        size='small'
            id="inputSubject"
            defaultValue=""
          />
             <Typography color='initial' fontWeight={600}>Country *</Typography>
           <TextField
        size='small'
            id="inputSubject"
            defaultValue=""
          />
             <Typography color='initial' fontWeight={600}>City *</Typography>
           <TextField
        size='small'
            id="inputSubject"
            defaultValue=""
          />

         <Button variant="contained" sx={{bgcolor:'#7EC948' , width:200}}>Submit</Button>
      </Stack>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={5}>
          <Box bgcolor='#e9e7e7' width={400} padding={5} marginLeft={5} mt={15}>
            <Typography variant="h6" sx={{color:'#4db6ac', fontSize:25}} mb={3}>Address</Typography>
            <Typography variant="subtitle1" lineHeight={2}>No:9, Venkatesh Perumal Street, 8th cross street, Ram Nagar (South) Madipakkam, Chennai - 600 091.</Typography>
          </Box>
          <Box mt={4} bgcolor='#e9e7e7' width={400} padding={2} marginLeft={5}>
            <Typography variant="h6" sx={{color:'#616161', fontSize:20}}>Our Location</Typography>
          <iframe width="350" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=400&amp;height=250&amp;hl=en&amp;q=No:9,%20Venkatesh%20Perumal%20Street,%20off%208th%20cross%20street,%20Ram%20Nagar%20Chennai+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
          </Box>
        </Grid>
      </Grid>
      <Divider  />
      <Footer />
    </div>
  )
}
