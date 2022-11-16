import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Header() {
  return (
    <div>
      <div>
      <FacebookIcon className='icon' color='primary' fontSize='xs' />
      <TwitterIcon className='icon' color='primary' fontSize='xs'/>
      <LinkedInIcon className='icon' color='primary' fontSize='xs' />
      <InstagramIcon className='icon' color='primary' fontSize='xs' />
    </div>
    <div >
    <p><span><img src="https://img.icons8.com/fluency/48/null/india-circular.png"/>&nbsp;&nbsp;India:/&nbsp;</span>English</p>
    </div>
    </div>
 )
}
