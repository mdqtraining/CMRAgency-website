import { Box, Button, Grid , Container , Typography , CardContent , CardMedia , Card, TextField } from '@mui/material';
import productInfo from "./ProductInfo";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageSlider from './Slider';



const slides = [
  {
  url:'https://www.cmragency.in/images/main-slider/3.jpg',
  title : "Experienced in Jacking Solution",
  },
  {
  url:'https://www.cmragency.in/images/main-slider/2.jpg',
  title :'One Stop Solution For All Industrial Need'
  },{
  url:'https://www.cmragency.in/images/main-slider/1.jpg',
  title :'Best Featuring Store for Torqing Solution' 
  },
]

export default function Main() {
  return (
    <Box>
        <ImageSlider slides={slides}/>
      <Grid container sx={{width:'100%' , bgcolor:'#efefef'}} mb={20} justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={12} lg={6}>
            <Typography variant="h4" color="primary" letterSpacing={1} fontWeight={400} margin={3}>About Igreen TECHNOLOGIES</Typography>
            <Typography variant='subtitle1' color='#222' align='left' lineHeight={2} fontSize={16} marginLeft={3} marginBottom={3}>CMR Agency is one of the leading Distributor and Stockist for all Industrial 
            Utility Companies all over the world are facing increasingly 
            complex and demanding environments not only in terms of 
            fast rollout of their services to new customers but also 
            providing the services with least disruption to the general
             public. We at Igreen Technologies are focused in helping utility 
             companies achieve their objective through trenchless technologies 
             like Horizontal Direction Drilling (HDD), Pipe Jacking and Augur Boring.</Typography>
           <Button variant='contained' sx={{marginBottom:5 , marginTop:2 , width:200 , height:50 , bgcolor:'#7EC948'}}>Read More</Button>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Box className='maingrid-img' component='img' sx={{width:400 , height:300}} src='https://www.cmragency.in/images/resource/mission.jpg'></Box>
        </Grid>
      </Grid>




      <Container>
      <Box>
        <Typography variant='h3' align='center' margin={5}>Our Products</Typography>
        <Grid container spacing={1} alignItems='center'>
        {
          productInfo.map((product , index)=>{
            return(
            <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 400 , height :400 ,backgroundColor:'#efefef', outline:0 , border:0 , boxShadow:0}} square={true} >
             <CardMedia
              component="img"
              height="200"
              width="400"
              image={product.img}
              alt="img"
            />
            <CardContent>
              <Typography variant="h6"  color="##424242" align='left' mb={5} fontWeight="600" fontSize={14}>
              {product.name}
                </Typography>
              <Typography variant="body2" color="text.secondary" align='left'>
                {product.description}
              </Typography>
            </CardContent>
          </Card>
          <Box mt={2} mb={5}>
            <Button variant='contained' sx={{bgcolor:'#7EC948'}}>READ MORE</Button>
            </Box>
            </Grid>
            )
          })
        }
      </Grid>
      </Box>
      </Container>



        <Grid container sx={{width:'100%'}}>
       <Grid item xs={12} md={6} lg={4} component='div' sx={{backgroundColor:'#efefef' , display:'block'}}>
           <Box mt={3}>
           <MailIcon sx={{color:'#7EC948'}} fontSize='large' margintop={3} />
           <Typography variant='body2' color='#212121' fontSize={14} fontWeight={400} marginBottom={5}>info@cmragency</Typography>
           </Box>
           <Box mb={10} > 
           <LocationOnIcon sx={{color:'#7EC948'}} fontSize='large' />
           <Typography variant='h6' color='#424242' fontSize={16} fontWeight={600}>CMR AGENCY</Typography>
           <Typography variant='h6' color='#424242'  fontSize={14}> shop no: 7/4, car street,banglore mani road,sriperumbudur,pin-602105. </Typography>
           </Box>
           <Box>
           <CallIcon sx={{color:'#7EC948'}} fontSize='large' />
           <Typography variant='body2' color='#212121' fontSize={14} fontWeight={400} marginBottom={10}>+91 73730 42047</Typography>
           </Box>
       </Grid>
       <Grid item xs={12} md={6} lg={8} component='div' sx={{backgroundColor:'#f7f4f4'}}>
            <Box alignContent='center' mt={5}>
            <Typography variant='h2' color='#424242' fontSize={20} fontWeight={500} marginBottom={3} >Enquiry us</Typography>
            <Typography variant='h2' color='#424242' fontSize={20} fontWeight={300} marginBottom={5}>Get in touch with us</Typography>
            </Box>
            <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            size='small'
            id="outlined-end-adornment"
            defaultValue=""
            placeholder='Your Name *'

            
          />
          <TextField
          size='small'
            id="inputEmail"
            defaultValue=""
            placeholder='Your Email *'
          />
        </div>
        <div>
        <TextField
        size='small'
            id="inputMobile"
            defaultValue=""
            placeholder='Mobile Number'
          />
        <TextField
        size='small'
            id="inputSubject"
            defaultValue=""
            placeholder='Your Subject'
          />
      </div> 
    </Box>
          <Box mt={5} mb={2}>
            <Button variant='contained' sx={{width:200 , height:50, bgcolor:'#7EC948'}}>GET A QUOTE</Button>
            </Box>
       </Grid>
       </Grid>



      </Box>
  )
}