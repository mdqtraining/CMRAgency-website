import { Box, Button, Grid , Container , Typography , CardContent , CardMedia , Card, TextField } from '@mui/material';
import productInfo from "./ProductInfo";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Main() {
  return (
    <div>
      <div className="container1">
        <div className='scrollingImg'>
        {/* <img src='https://www.cmragency.in/images/main-slider/3.jpg'/> */}
        </div>
      </div>
      <div className="container2">
        <div className='text-con'>
        <h2>About CMR Agency</h2>
        {/* <p>CMR Agency is one of the leading Distributor and Stockist for all Industrial Products across India since 1985. Under the guidance of our founder Mr Chidambaram Ramasamy over 35 years, we are providing best Customer Service. Presently having Headquarters in Trichy and Branch Office in Sriperumbudhur with Integrated Warehouse. We deal with Pneumatics, Hydraulics, Hand tools, Power Tools, Cutting Tools, Measuring Instruments, Trolley Wheels, Adhesives, Abrasives, Brass Fittings,Hydraulic Fitting and all types of Fittings, Bearings, Rubber Products, Electrical, Hardware and Consumables etc.</p>
        <Button variant='contained'>Read More</Button> */}
        </div>
        <div className='rightside-img'>
        <img className='container2-img' src='https://www.cmragency.in/images/about.png' alt='img'></img>
        </div>
      </div>
      <Container>
      <Box>
        <Typography variant='h3' align='center' margin={5}>Our Products</Typography>
        <Grid container spacing={2} >
        {
          productInfo.map((product , index)=>{
            return(
            <Grid item xs={4} key={index}>
            <Card sx={{ maxWidth: 400 , height :400 ,backgroundColor:'#efefef', outline:0 , border:0 , boxShadow:0}} square={true} >
             <CardMedia
              component="img"
              height="200"
              width="400"
              image={product.img}
              alt="img"
            />
            <CardContent>
              <Typography variant="h6"  color="primary" align='left' mb={5} fontWeight="600" fontSize={14}>
              {product.name}
                </Typography>
              <Typography variant="body2" color="text.secondary" align='left'>
                {product.description}
              </Typography>
            </CardContent>
          </Card>
          <Box mt={2} mb={5}>
            <Button variant='contained'>READ MORE</Button>
            </Box>
            </Grid>
            )
          })
        }
      </Grid>
      </Box>
      </Container>

      <Box component='div' sx={{display:'flex' , width:'100%'}} mt={10}>
        <Grid container>
       <Grid item xs={4} component='div' sx={{backgroundColor:'#efefef' , display:'block'}}>
           <Box mt={3}>
           <MailIcon color='primary' fontSize='large' marginTop={3} />
           <Typography variant='body2' color='#212121' fontSize={14} fontWeight={400} marginBottom={5}>info@cmragency</Typography>
           </Box>
           <Box mb={10} > 
           <LocationOnIcon color='primary' fontSize='large' />
           <Typography variant='h6' color='primary' fontSize={16} fontWeight={600}>CMR AGENCY</Typography>
           <Typography variant='h6' color='primary'  fontSize={14}> shop no: 7/4, car street,banglore mani road,sriperumbudur,pin-602105. </Typography>
           </Box>
           <Box>
           <CallIcon color='primary' fontSize='large' />
           <Typography variant='body2' color='#212121' fontSize={14} fontWeight={400} marginBottom={10}>+91 73730 42047</Typography>
           </Box>
       </Grid>
       <Grid item xs={8} component='div' sx={{backgroundColor:'#f7f4f4'}}>
            <Box alignContent='center' mt={5}>
            <Typography variant='h2' color='primary' fontSize={20} fontWeight={500} marginBottom={3} >Enquiry us</Typography>
            <Typography variant='h2' color='primary' fontSize={20} fontWeight={300} marginBottom={5}>Get in touch with us</Typography>
            </Box>
            <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="inputName"
            defaultValue=""
            placeholder='Your Name *'
          />
          <TextField
            id="inputEmail"
            defaultValue=""
            placeholder='Your Email *'
          />
        </div>
        <div>
        <TextField
            id="inputMobile"
            defaultValue=""
            placeholder='Mobile Number'
          />
        <TextField
            id="inputSubject"
            defaultValue=""
            placeholder='Your Subject'
          />
      </div> 
    </Box>
          <Box mt={5}>
            <Button variant='contained' sx={{width:200 , height:50}}>GET A QUOTE</Button>
            </Box>
       </Grid>
       </Grid>
      </Box>
  </div>
  )
}