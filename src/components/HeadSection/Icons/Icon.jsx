import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box className='top-icon' sx={{display:'flex' , justifyContent:'flex-end'}}mt={3}>
      <Box marginRight={3}>
      <FacebookIcon className='icon'  fontSize='xs' sx={{marginRight:2 , color:'#7EC948' }}/>
      <TwitterIcon className='icon'  fontSize='xs' sx={{marginRight:2 , color:'#7EC948' }}/>
      <LinkedInIcon className='icon' fontSize='xs' sx={{marginRight:2 , color:'#7EC948' }} />
      <InstagramIcon className='icon'fontSize='xs' sx={{marginRight:2, color:'#7EC948' }} />
    </Box>
    <Box >
    <Typography color='#878789' marginRight={3}><span><img style={{verticalAlign:'middle' , width:28}} alt='img' src="https://img.icons8.com/fluency/48/null/india-circular.png"/>&nbsp;&nbsp;India:/&nbsp;</span>English</Typography>
    </Box>
    </Box>
 )
}
