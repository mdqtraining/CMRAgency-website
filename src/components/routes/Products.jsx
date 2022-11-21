import Header from "../HeadSection/Header/Header";
import Footer from '../FootSection/Footer/Footer';
import Navbar from '../HeadSection/Navbar/Navbar';
import { Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import { ProductsCotext } from "../../context/productsContext";

export default function Products() {

  const products = useContext(ProductsCotext);
 
  return (
    <Box>
      <Header />
      <Navbar />
      
      {/* products page layout 1 */}

      <Container>
        <Grid container sx={{width:'100%' , position:'relative'}}>
          <Grid item xs={12} sm={12} lg={12}>
        <Box className='firstlayout-img'  sx={{ width:'100%', height:400 , textAlign:'left' ,backgroundSize:'cover',backgroundPosition:'center', backgroundImage:`url(${'https://cdn.pixabay.com/photo/2014/09/13/21/45/drill-444484__480.jpg'})`}}>
            <Box className='aboutbox' component='div' paddingLeft={2} sx={{width:500 , bgcolor:'#ffff' , position :'absolute' , top:'30%' , left:'10%'}}>
                <Typography className="abouttext" variant="h5" fontFamily={600} margin={2} sx={{color:'#009688'}}>Products</Typography>
                <Typography className="abouttext" variant="subititle1" fontFamily={400} color='initial' lineHeight={2} sx={{color:'##7EC948'}}>We are the Leading manufacturers and designers for drilling tools and equipment. Specialized manufacturers tools and equipments for versatile 
                industries and applications. Clients can make maximum benefits from our products and equipments.</Typography>
            </Box>
            </Box>
            </Grid>
            </Grid>
        </Container>

        {/* products page layout 2 */}
        <Container>
      <Box mt={8}>
        <Typography variant='h3' align='center' marginBottom={5} fontWeight={500} sx={{color:'#777777'}}>Our Products</Typography>
        <Grid container spacing={2} alignItems='center'>
        {
          products.map((product , index)=>{
            return(
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box position='relative'>
            <Card sx={{ maxWidth: 400 , height :300 ,backgroundColor:'#efefef', outline:0 , border:0 , boxShadow:0 , ":hover":{boxShadow:5}}} square={true} >
             <CardMedia
              component="img"
              height="200"
              width="400"
              image={`https://mdqualityapps.in/igreen_tec/products/${product.productImage}`}
              alt="img"
            />
            <CardContent>
              <Typography variant="h6"  color="##424242" align='center' mb={5} fontWeight="600" fontSize={16}>
              {product.productName}
                </Typography>
            </CardContent>
          </Card>
          <Box mt={3} mb={5} >
            <Button className="addcart-btn" variant='contained'sx={{ width:200 , bgcolor:'#333' , position:'absolute' , top:'85%' , left:'15%' , opacity:0.5 , ":hover":{opacity:1 , bgcolor:'#7EC948'} }}>Add To Cart</Button>
            </Box>
            </Box>
            </Grid>
            )
          })
        }
      </Grid>
      </Box>
      </Container>
  <Divider />
      <Footer />
    </Box>
  )
}
