import Header from "../HeadSection/Header/Header";
import Footer from "../FootSection/Footer/Footer";
import Navbar from '../HeadSection/Navbar/Navbar';
import { Box, Container } from "@mui/system";
import { Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';


const aboutLayout = [{
  img:'https://images.pexels.com/photos/8487376/pexels-photo-8487376.jpeg?auto=compress&cs=tinysrgb&w=600',
  title:'Vision',
  description:'Establishing Centralised Industrial Retail Shops at all Industrial Hubs around the Globe.',
},{
  img:'https://images.pexels.com/photos/20791/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
  title:'Mission',
  description:'To ensure Best Quality Service at Optimum Price,On-Time Delivery, and Constantly Grow along with our business partners, build and maintain trust with our customers.',
},{
  img:'https://images.pexels.com/photos/46240/drill-milling-milling-machine-cutting-tools-46240.jpeg?auto=compress&cs=tinysrgb&w=600',
  title:'Our Strength',
  description:'We are Easily Reachable for all your Daily Industrial Needs. We have Strong Supply Network To Maintain Consistency in Quality, Delivery and Best Service at all time.',
}]



export default function About() {
  return (
    <div>
    <Header />
    <Navbar />
    <Box bgcolor='#fff'>

      {/* about page layout 1 */}
      <Container>
        <Grid container sx={{width:'100%' , position:'relative'}}>
          <Grid item xs={12} sm={12} lg={12}>
        <Box className='firstlayout-img' sx={{ width:'100%', height:400 , textAlign:'left' ,backgroundSize:'cover',backgroundPosition:'center', backgroundImage:`url(${'https://images.pexels.com/photos/47091/drill-milling-milling-machine-drilling-47091.jpeg?auto=compress&cs=tinysrgb&w=600'})`}}>
            <Box className='aboutbox' component='div' paddingLeft={2} sx={{width:500 , bgcolor:'#ffff' , position :'absolute' , top:'30%' , left:'10%'}}>
                <Typography className="abouttext" variant="h5" fontFamily={600} margin={2} sx={{color:'#009688'}}>Company</Typography>
                <Typography className="abouttext" variant="subititle1" fontFamily={400} color='initial' lineHeight={2} sx={{color:'##7EC948'}}>We deliver high quality equipment such as with FMC Seal,Plungers,Chinese Fingers,Drill Bits,Tri Cone Bits ,D-Shackle,Bow Shackle ,Rock Reamers,HDD Hole Opener ,Drilling Pilots and modern machinery for ide range of purpose</Typography>
            </Box>
            </Box>
            </Grid>
            </Grid>
        </Container>
      
       {/* about p[age layout 2 */}
        
        <Grid container bgcolor='#efefef' paddingBottom={8}>
        <Grid item xs={12} sm={12} lg={6}>
            <Typography variant="h4" letterSpacing={1} fontWeight={400} margin={5} sx={{color:'#7EC948'}}>About Igreen TECHNOLOGIES</Typography>
            <Typography variant='subtitle1' color='##7EC948' align='left' lineHeight={2} fontSize={16} marginLeft={3} marginBottom={3} width='90%'>
             IGREEN is a premier engineering tools solution firm taht deliver high quality equipment and modern machinery for wide range of purposes.We address the various challengers faced by drillers and filed technicians with their current gear equipment. IGREEN has collabrated with several contractors and customers over the year and are now a leading brand of drilling equipment manufacturing.
             IGREEN provides the best products with modern and high performing drilling equipment.<br /><br /> Our cutting-edge technology and sophisticated build adds an oustanding value for specific purposes.In our endeavour to provide the Best Services, we continually strive to present Quality Products to our customers. We stand as a reputed company in the engineerinng industry for drilling tools and equipment manufacturing.
             Our products are available at competitive prices enabling our clients to gain maximum ROI with IGREEN.  
             </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Box display='flex' flexDirection='column'  marginLeft={5}>
          <Box className='maingrid-img' component='img' sx={{width:450 , height:300}} marginTop={3} src='https://mdqualityapps.in/igreen_tec/products/drill_bits-1668585188.jpg'></Box>
          <Box marginTop={4}>
            <Typography align="left" marginBottom={4} fontWeight={500}>We Deliver Products such as</Typography>
            <ul className='aboutlist' style={{ listStyle:'none' , columnCount:2 , textAlign:'left'}}>
              <li><SettingsIcon fontSize="small" sx={{color:"#7EC948" , verticalAlign:'middle'}} /> FMC Seal</li>
              <li><SettingsIcon fontSize="small" sx={{color:"#7EC948" , verticalAlign:'middle'}} /> Plungers</li>
              <li><SettingsIcon fontSize="small" sx={{color:"#7EC948" , verticalAlign:'middle'}} /> Chinese Fingers</li>
              <li><SettingsIcon fontSize="small" sx={{color:"#7EC948" , verticalAlign:'middle'}}  /> Drill Bits</li>
              <li><SettingsIcon fontSize="small" sx={{color:"#7EC948" , verticalAlign:'middle'}}  /> D-Shackle</li>
              <li><SettingsIcon fontSize="small" sx={{color:"#7EC948" , verticalAlign:'middle'}}  /> Bow Shackle</li>
              <li><SettingsIcon fontSize="small" sx={{color:"#7EC948" , verticalAlign:'middle'}}  /> Rock Reamers</li>
              <li><SettingsIcon fontSize="small" sx={{color:"#7EC948" ,verticalAlign:'middle'}}  /> Drilling Pilots</li>
            </ul>
          </Box>
          </Box>
        </Grid>
        </Grid>

        {/* about page 3rd layout*/}

        <Container bgcolor='#cfd8dc'>
      <Box >
        <Grid container spacing={1} alignItems='center'>
        {
         aboutLayout.map((item , index)=>{
            return(
            <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
            <Card sx={{ maxWidth: 400 , height :400 ,backgroundColor:'#efefef', outline:0 , border:0 , boxShadow:0 , ":hover":{boxShadow:5}}} square={true} >
             <CardMedia
              component="img"
              height="200"
              width="400"
              image={item.img}
              alt="img"
            /> 
            <CardContent>
              <Typography variant="h6"  color="##424242" align='left' mb={5} fontWeight="600" fontSize={14}>
              {item.title}
                </Typography>
              <Typography variant="body2" color="text.secondary" align='left'>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
            </Grid>
            )
          })
        }
      </Grid>
      </Box>
      </Container>

      <Divider light sx={{marginTop:2}}/>



    </Box>
    <Footer />
    </div>
  )
}
