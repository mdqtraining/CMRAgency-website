import { Button, Card, CardContent, CardMedia,Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch , useSelector } from "react-redux";
import {selectCartItems} from '../../../store/cart/cart.selector';
import {addItemToCart} from '../../../store/cart/cart.action';

export default function Productcard({product}) {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems , product))
    };

  return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box position='relative'>
            <Card  sx={{ maxWidth: 400 , height :300 ,backgroundColor:'#efefef', outline:0 , border:0 , boxShadow:0 , ":hover":{boxShadow:5}}} square={true} >
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
            <Button onClick={addProductToCart} className="addcart-btn" variant='contained'sx={{ width:200 , bgcolor:'#333' , position:'absolute' , top:'85%' , left:'15%' , opacity:0.5 , ":hover":{opacity:1 , bgcolor:'#7EC948'} }}>Add To Cart</Button>
            </Box>
            </Box>
            </Grid>
  )
}