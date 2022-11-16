import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

export default function Searchbox() {
  return (
    <div>
      <div>
        <img src="https://www.igreentechnologies.in/img/logo.jpg" alt="logo" />
        <input type='text' id='input'name='searchInput' placeholder="Search any products"></input>
        <button type="search">Search</button>
        </div>
        <div >
        <CallIcon color='primary' fontSize='xs' ></CallIcon><span> +91 73730 42047</span>
        <MailIcon color='primary' fontSize='xs'></MailIcon><span> info@cmragency.com</span>
        </div>
    </div>
  )
}
