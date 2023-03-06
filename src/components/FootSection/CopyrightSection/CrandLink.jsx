import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Grid,Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';


export default function CrandLink() {
  return (
    <Grid container sx={{backgroundColor:'#efefef' , width:'100%' , alignItems:'center', overflowX:'hidden'}}>
        <Grid item xs={12} sm={12} md={12} lg={12} mt={4} mb={4} display='flex' justifyContent='space-around' className='footer'>
          <Box className='footer-text'>
        <Typography sx={{color:'#7EC948'}}>© {new Date().getFullYear()} Copyright: <Typography variant='span' sx={{color:'#333'}}>Igreen Technologies</Typography></Typography>
        </Box>
        <Box>
            <Typography sx={{color:'#7EC948'}}>Designed By : <Typography variant='span' sx={{color:'#333'}}>MDQuality Apps Solutions</Typography></Typography>
          </Box>
        </Grid>
        
      <Grid item xs={12} sm={12} md={12} lg={12} mt={2} mb={5} sx={{fontSize:14}} className='footer' display='flex' justifyContent='center'>
        <Box>
          <Link to="/"  style={{textDecoration:'none',color:'#5e5e60' , marginRight:15, marginLeft:6}}>Home</Link>
          <Link to="/about" style={{textDecoration:'none',color:'#5e5e60' , marginRight:15}}>About Us</Link>
          <Link to="/products" style={{textDecoration:'none',color:'#5e5e60' , marginRight:15}}>Products</Link>
          <Link to="/contact" style={{textDecoration:'none',color:'#5e5e60' , marginRight:15}}>Contact</Link>
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
