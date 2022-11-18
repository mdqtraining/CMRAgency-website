import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';


export default function CrandLink() {
  return (
    <Grid container sx={{backgroundColor:'#efefef' , width:'100%' , alignItems:'center'}}>
        <Grid item xs={12} sm={12} md={12} lg={6} mt={4} mb={5}>
        <Typography color='#5e5e60'>© 2020 CMR Agency All rights reserved</Typography>
        </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} mt={4} mb={5} sx={{fontSize:14}} className='footer' display='flex' justifyContent='center'>
        <Box>
          <Link href="/" underline='none' color='#5e5e60' marginLeft={3} marginRight={2}>Home</Link>
          <Link href="/about" underline='none' color='#5e5e60' marginRight={2}>About Us</Link>
          <Link href="/products" underline='none' color='#5e5e60' marginRight={2}>Products</Link>
          <Link href="/contact" underline='none' color='#5e5e60' marginRight={6}>Contact</Link>
          </Box>
          <Box className="footer-icon">
        <FacebookIcon color="action"  fontSize='xs' sx={{marginRight:2}} />
        <TwitterIcon color="action"  fontSize='xs' sx={{marginRight:2}}   />
        <LinkedInIcon color="action" fontSize='xs' sx={{marginRight:2}}  />
        <InstagramIcon color="action" fontSize='xs' sx={{marginRight:2}}  />
        </Box>
      </Grid>
    </Grid>
  )
}
