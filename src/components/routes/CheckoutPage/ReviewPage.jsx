import { Typography , Grid , ListItem , List , ListItemText} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/cart.selector";
  
  
  export default function Review(props) {
    
    const products = useSelector(selectCartItems);


    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {products.map((product, index) => (
            <ListItem key={index} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={product.productName} secondary={"Quantity : " + product.quantity} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              00.00
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Shipping
            </Typography>
            <Typography gutterBottom>x</Typography>
            <Typography gutterBottom>{props.addresses.join(', ')}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Payment details
            </Typography>
            <Grid container>
                  <Grid item xs={6}>
                    <Typography gutterBottom>Card Holder</Typography>
                    <Typography gutterBottom>Card Number</Typography>
                    <Typography gutterBottom>Exp Date</Typography>
                  </Grid>
                  <Grid item xs={6}>
                
                  <React.Fragment >
                  <Typography gutterBottom>{props.payments.cardName}</Typography>
                  <Typography gutterBottom>{props.payments.cardNumber}</Typography>
                  <Typography gutterBottom>{props.payments.expDate}</Typography>
                  </React.Fragment>
              
                    
              </Grid> 
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }