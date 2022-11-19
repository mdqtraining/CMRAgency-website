import { AppBar, Toolbar, Typography } from "@mui/material";


export default function Navbar() {
  return (
    <AppBar sx={{position:'sticky',width:'100%', zIndex:1}}>
          <Toolbar sx={{backgroundColor:'#fff' , display:'flex' ,justifyContent:'center' , height:80}}>
            <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr:{xs:2 , sm:2 ,md:2 , lg:4},
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
              mr:{xs:2 , sm:2 ,md:2 , lg:4},
              fontSize:{xs:17 , md:19},
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'initial',
              textDecoration: 'none',
            }}
          >ABOUT</Typography>
            <Typography
            variant="h6"
            component="a"
            href="/products"
            sx={{
              mr:{xs:2 , sm:2 ,md:2 , lg:4},
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
              mr:{xs:2 , sm:2 ,md:2 , lg:4},
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
