import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectCartItems } from '../../../store/cart/cart.selector';
import { Container } from '@mui/system';
import { Box, Button, Grid, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { clearItemFromCart } from '../../../store/cart/cart.action';
import Navbar from '../../HeadSection/Navbar/Navbar';
import {addItemToCart} from '../../../store/cart/cart.action';
import {removeItemFromCart} from '../../../store/cart/cart.action';
import { Link } from 'react-router-dom';

export default function FilledCart() {

 const cartItems = useSelector(selectCartItems);
 const count = useSelector(selectCartCount);
 const dispatch = useDispatch();
 const clear = (cartItem)=> dispatch(clearItemFromCart(cartItems, cartItem ));

  const addItem =(cartItem) => dispatch(addItemToCart(cartItems , cartItem));
  const removeItem =(cartItem) => dispatch(removeItemFromCart(cartItems, cartItem));


  return (
    <Box>
    <Navbar />
    <Container>
      <Grid container mt={5}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        {
          count === 0 ? (
            <Box>
            <Box>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead sx={{bgcolor:'#efefef'}}>
                <TableRow>
                <TableCell>Product</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price&nbsp;(₹)</TableCell>
                  <TableCell align="right">Remove</TableCell>
                </TableRow>
              </TableHead> 
              </Table>
              </TableContainer>
              </Box>
             <Box padding={10}>
          <Typography variant='h5' mb={3}>Your Cart is Empty</Typography> 
          <Link to='/products' style={{textDecoration:'none'}}>
            <Button variant='container'  sx={{bgcolor:'#7EC948' , color : '#222', ":hover":{bgcolor:'#29b6f6'}}}>Buy Products</Button>
          </Link>
          </Box>
          </Box>
          
          ) : (
            <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'#efefef'}}>
          <TableRow>
          <TableCell>Product</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price&nbsp;(₹)</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead> 
        <TableBody>
          {cartItems.map((cartItem) => (
            <TableRow
              key={cartItem.productId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell><img style={{width:80 , height:80}} alt='img' src={`https://mdqualityapps.in/igreen_tec/products/${cartItem.productImage}`}/></TableCell> 
            <TableCell component='th' scope='row'>{cartItem.productName}</TableCell>
              <TableCell align="right"><Button onClick={()=>removeItem(cartItem)}>-</Button>{cartItem.quantity}<Button onClick={()=>addItem(cartItem)}>+</Button></TableCell>
              <TableCell align="right">{cartItems.productPrice}</TableCell>
              <TableCell align="right"><Button onClick={()=>clear(cartItem)}><ClearIcon /></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <Box mt={2}>
    <Button variant='container' href='/checkout' sx={{bgcolor:'#7EC948' , color : '#222', ":hover":{bgcolor:'#29b6f6'}}}>Proceed To Checkout</Button></Box>
    </Box>
          )}
    </Grid>
    </Grid>
    </Container>
    </Box>
  );
}