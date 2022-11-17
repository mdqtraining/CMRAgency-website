import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Navbar() {
  return (
    <AppBar sx={{position:'sticky'}}>
          <Toolbar sx={{backgroundColor:'#fff' , display:'flex' ,justifyContent:'center' , height : 90}}>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >HOME</Typography>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/about"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >ABOUT US</Typography>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/products"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >PRODUCTS</Typography>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/contact"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >CONTACT</Typography>
            </Toolbar>
    </AppBar>
  )
}
