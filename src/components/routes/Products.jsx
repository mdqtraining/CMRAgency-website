import Header from "../HeadSection/Header/Header";
import Footer from '../FootSection/Footer/Footer';
import Navbar from '../HeadSection/Navbar/Navbar';
import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import Productcard from "./ProductPage/Productcard";

export default function Products() {

  const products = useContext(ProductsContext);
  

 
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
          products.map((product, index)=>(
        <Productcard product={product} key={index} />
        
        ))}
        </Grid>
        </Box>
        </Container>

  <Divider />
      <Footer />
    </Box>
  )
}
