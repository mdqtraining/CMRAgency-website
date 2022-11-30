import { Box, Button, Grid , Container , Typography , CardContent , CardMedia , Card, TextField } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageSlider from './Slider';
import { useContext , useRef , useState} from 'react';
import { ProductsContext } from '../../context/productsContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import emailjs from '@emailjs/browser';

const slides = [
  {
  url:'https://c1.wallpaperflare.com/preview/214/902/402/milling-cutters-end-mill-milling-machining.jpg',
  title : "Primary Quality Drilling Experience",
  },
  {
  url:'https://c1.wallpaperflare.com/preview/154/726/555/drill-milling-milling-machine-drilling.jpg',
  title :'Tools with High Precision'
  },{
  url:'https://c4.wallpaperflare.com/wallpaper/658/696/12/cnc-drill-drilling-machine-wallpaper-preview.jpg',
  title :'Superior Performance' 
  },
]

export default function Main() {

  const gProducts = useContext(ProductsContext);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = (product) => {
      dispatch(addItemToCart(cartItems , product))
  };

  const [homeForm, setHomeForm]= useState({
    name :'',
    email:'',
    mobileNumber:'',
    subject:''
  });
  const form = useRef();

  function handleChange(e){
    const{name, value}=e.target;
    setHomeForm({...homeForm , [name]:value});
  }

  function sendForm(e){
    e.preventDefault();
    emailjs.sendForm('service_szodhjv', 'template_wrdx1fl', form.current, '0lVH7svAZeBNdlCRA');

    setHomeForm({
      name :'',
      email:'',
      mobileNumber:'',
      subject:''
    })
  };


  return (
    <Box  bgcolor='#cfd8dc'>
        <Box bgcolor='#ffff'>
        <ImageSlider slides={slides}/>
        </Box>
      <Grid container sx={{width:'100%' , bgcolor:'#efefef'}} mb={15} justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={12} lg={6}>
            <Typography variant="h4" letterSpacing={1} fontWeight={400} margin={3} sx={{color:'#7EC948'}}>About Igreen TECHNOLOGIES</Typography>
            <Typography variant='subtitle1' color='#222' align='left' lineHeight={2} fontSize={16} marginLeft={3} marginBottom={3}>
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
          <Box className='maingrid-img' component='img' sx={{width:400 , height:300}} src='https://mdqualityapps.in/igreen_tec/products/drill_bits-1668585188.jpg'></Box>
        </Grid>
      </Grid>




      <Container>
      <Box>
        <Typography variant='h3' align='center' marginBottom={5}>Our Products</Typography>
        <Grid container spacing={2} alignItems='center'>
        {
          gProducts.filter( product => product.productId > 5 && product.productId <12 ).map((product , index)=>{
            return(
            <Grid item xs={12} sm={4} md={4} lg={4} key={index}  >
            <Box position='relative'>
            <Card sx={{ maxWidth: 400 , height :420 ,backgroundColor:'#efefef', outline:0 , border:0 , boxShadow:0 , ":hover":{boxShadow:5}}} square={true} >
             <CardMedia
              component="img"
              height="200"
              width="400"
              image={`https://mdqualityapps.in/igreen_tec/products/${product.productImage}`}
              alt="img"
            />
            <CardContent>
              <Typography variant="h6"  color="##424242" align='left' mb={5} fontWeight="600" fontSize={14}>
              {product.productName}
                </Typography>
              <Typography variant="body2" color="text.secondary" align='left'>
                {product.productDescription}
              </Typography>
            </CardContent>
          </Card>
          <Box mt={3} mb={5} >
            <Button onClick={()=>addProductToCart(product)} variant='contained'sx={{ width:200 , bgcolor:'#333' , position:'absolute' , top:'88%' , left:'20%' , opacity:0.5 , ":hover":{opacity:1 , bgcolor:'#7EC948'} }}>Add To Cart</Button>
            </Box>
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
           <Typography variant='body2' color='#212121' fontSize={16} fontWeight={400} marginBottom={5}> production@igreentec.in</Typography>
           </Box>
           <Box mb={10} > 
           <LocationOnIcon sx={{color:'#7EC948'}} fontSize='large' />
           <Typography variant='h6' color='#424242' fontSize={16} fontWeight={600}>Igreen Tec</Typography>
           <Typography variant='h6' color='#424242'  fontSize={14}> No:9, Venkatesh Perumal Street, off 8th cross street,
Ram Nagar (South) Madipakkam, Chennai - 600 091. </Typography>
           </Box>
           <Box>
           <CallIcon sx={{color:'#7EC948'}} fontSize='large' />
           <Typography variant='body2' color='#212121' fontSize={14} fontWeight={400} marginBottom={10}>+91 7505054321</Typography>
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
        ref={form}
        onSubmit={sendForm}
        id='homeForm'
      >
        <div>
          <TextField
            size='small'
            id="outlined-end-adornment"
            name='name'
            type='text'
            placeholder='Your Name *'
            onChange={handleChange}
            value={homeForm.name}
          />
          <TextField
            size='small'
            id="inputEmail"
            name='email'
            type='email'
            placeholder='Your Email *'
            onChange={handleChange}
            value={homeForm.email}
          />
        </div>
        <div>
        <TextField
            size='small'
            id="inputMobile"
            name='mobileNumber'
            type='tel'
            placeholder='Mobile Number'
            onChange={handleChange}
            value={homeForm.mobileNumber}
          />
        <TextField
           size='small'
            id="inputSubject"
            name='subject'
            type='text'
            placeholder='Your Subject'
            onChange={handleChange}
            value={homeForm.subject}
          />
      </div> 
    </Box>
          <Box mt={5} mb={2}>
            <Button type='submit' form='homeForm' variant='contained' sx={{width:200 , height:50, bgcolor:'#7EC948'}}>GET A QUOTE</Button>
            </Box>
       </Grid>
       </Grid>



      </Box>
  )
}