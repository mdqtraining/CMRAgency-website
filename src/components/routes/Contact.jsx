import Header from "../HeadSection/Header/Header";
import Footer from '../FootSection/Footer/Footer';
import Navbar from '../HeadSection/Navbar/Navbar';
import { Button, Grid, TextField, Typography } from "@mui/material";
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
          width: '80ch'
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
          <Box>
           
          </Box>
        </Grid>
      </Grid>

      <Footer />
    </div>
  )
}
