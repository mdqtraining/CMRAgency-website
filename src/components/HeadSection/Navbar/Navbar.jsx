import { AppBar, Badge, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../../store/cart/cart.selector";
import { Link } from "react-router-dom";

export default function Navbar() {

  const count = useSelector(selectCartCount);

  
  return (
    <AppBar sx={{position:'sticky',width:'100%', zIndex:1}}>
          <Toolbar sx={{backgroundColor:'#fff', height:80}}>
           <Grid container display='flex' justifyContent='center'>
            <Grid item xs={9} sm={9} md={9} lg={10}   sx={{display:'flex' , justifyContent:'center'}}>
              <Link to='/' style={{textDecoration:'none'}}>
            <Typography
            variant="h6"
            sx={{
              mr:{xs:2 , sm:2 ,md:2 , lg:4},
              ml:{xs:5 , sm:5 , md:5},
              fontSize:{xs:16 , md:19},
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
            }}
          >HOME</Typography>
              </Link>
 
            <Link to='/about' style={{textDecoration:'none'}}>
            <Typography
            variant="h6"
            sx={{
              mr:{xs:2 , sm:2 ,md:2 , lg:4},
              fontSize:{xs:16 , md:19},
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >ABOUT</Typography>
          </Link>
          <Link to='/products' style={{textDecoration:'none'}}>
            <Typography
            variant="h6"
            sx={{
              mr:{xs:2 , sm:2 ,md:2 , lg:4},
              fontSize:{xs:16 , md:19},
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >PRODUCTS</Typography>
          </Link>
          <Link to='/contact' style={{textDecoration:'none'}}>
            <Typography
            variant="h6"
            sx={{
              mr:{xs:2 , sm:2 ,md:2 , lg:4},
              fontSize:{xs:16 , md:19},
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >CONTACT</Typography>
          </Link>
            </Grid>
            
            <Grid item xs={3} sm={3} md={3} lg={2}>
            <Box display='flex' justifyContent='flex-end'>
              <Link to='/cartpreview' style={{textDecoration:'none'}}>
          <Typography
            variant="h6"
            sx={{
              mr:{xs:2 , sm:2 ,md:2 , lg:0},
              fontSize:{xs:16 , md:19},
              display: { xs: 'flex', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
              <IconButton aria-label="cart">
                <Badge badgeContent={count} color="secondary">
                  <ShoppingCartIcon fontSize="normal" sx={{color:'#7EC948'}}/>
                </Badge>
              </IconButton>
              </Typography>
               </Link>
          </Box>
          </Grid>
           </Grid>
            </Toolbar>
    </AppBar>
  )
}
