import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{display:'flex' , justifyContent:'flex-end'}}mt={3}>
      <Box marginRight={3}>
      <FacebookIcon className='icon' color='success' fontSize='xs' sx={{marginRight:2}}/>
      <TwitterIcon className='icon' color='success' fontSize='xs' sx={{marginRight:2}}/>
      <LinkedInIcon className='icon' color='success' fontSize='xs' sx={{marginRight:2}} />
      <InstagramIcon className='icon' color='success' fontSize='xs' sx={{marginRight:2}} />
    </Box>
    <Box >
    <Typography color='#878789' marginRight={3}><span><img style={{verticalAlign:'middle' , width:28}} src="https://img.icons8.com/fluency/48/null/india-circular.png"/>&nbsp;&nbsp;India:/&nbsp;</span>English</Typography>
    </Box>
    </Box>
 )
}
