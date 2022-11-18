import { AppBar, Toolbar, Typography } from "@mui/material";


export default function Navbar() {
  return (
    <AppBar sx={{position:'sticky' , width:'100%'}}>
          <Toolbar sx={{backgroundColor:'#fff' , display:'flex' ,justifyContent:'center'}}>
            <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontSize:{xs:17 , md:19},
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >HOME</Typography>
            <Typography
            variant="h6"
            component="a"
            href="/about"
            sx={{
              mr: 2,
              fontSize:{xs:17 , md:19},
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >ABOUT US</Typography>
            <Typography
            variant="h6"
            component="a"
            href="/products"
            sx={{
              mr: 2,
              fontSize:{xs:17 , md:19},
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >PRODUCTS</Typography>
            <Typography
            variant="h6"
            component="a"
            href="/contact"
            sx={{
              mr: 2,
              fontSize:{xs:17 , md:19},
              display: { xs: 'flex', md: 'flex' },
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
