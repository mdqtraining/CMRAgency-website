import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box,Grid, Link, Typography } from '@mui/material';

export default function CrandLink() {
  return (
    <Box sx={{backgroundColor:'#efefef' , height :100 , width:'100%'}}>
      <Grid container>
        <Grid item xs={6} mt={5}>
        <Typography color='#5e5e60'>© 2020 CMR Agency All rights reserved</Typography>
        </Grid>
      <Grid item xs={6} mt={5} sx={{fontSize:14}}>
          <Link href="/" underline='none' color='#5e5e60' marginRight={2}>Home</Link>
          <Link href="/about" underline='none' color='#5e5e60' marginRight={2}>About Us</Link>
          <Link href="/products" underline='none' color='#5e5e60' marginRight={2}>Products</Link>
          <Link href="/contact" underline='none' color='#5e5e60' marginRight={8}>Contact</Link>
          
        <FacebookIcon color="action"  fontSize='xs' sx={{marginRight:2}} />
        <TwitterIcon color="action"  fontSize='xs' sx={{marginRight:2}}   />
        <LinkedInIcon color="action" fontSize='xs' sx={{marginRight:2}}  />
        <InstagramIcon color="action" fontSize='xs' sx={{marginRight:2}}  />
      </Grid>
      </Grid>
    </Box>
  )
}
