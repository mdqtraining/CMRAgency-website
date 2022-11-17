import {Grid, Link,Stack, Typography } from "@mui/material"
import { Box} from "@mui/system"

export default function BottomShortcut() {
  return (
      <Grid container mt={8} mb={8} spacing={2} alignItems='center'>
          <Grid item xs={12} md={3} lg={4} justifyContent='center'>
          <Stack sx={{alignItems:'center'}}>
           <ul style={{listStyle:'none' , display:'list-item' , textAlign:'left'}}>
           <Typography variant="h5" color="initial" fontWeight={600} fontSize={17} marginBottom={1}>Quick links</Typography>
            <li><Link href="/" underline="none">Home</Link></li>
            <li><Link href="/about" underline="none">about</Link></li>
            <li><Link href="/products" underline="none">Products</Link></li>
            <li><Link href="/contact" underline="none"> Contact</Link></li>
            </ul>
            </Stack> 
          </Grid>
        <Grid  item xs={12} md={3} lg={4} justifyContent='center'>
        <Stack sx={{alignItems:'center'}}>
          <ul style={{listStyle:'none' , display:'list-item' , textAlign:'left'}}>
            <Typography variant="h5" color="initial"fontWeight={600} fontSize={17} marginBottom={1}>Our products</Typography>
            <li><Link href="/products" underline="none">Pnuematics</Link></li>
            <li><Link href="/products" underline="none">Hydraulics</Link></li>
            <li><Link href="/products" underline="none">Hand Tools</Link></li>
            <li><Link href="/products" underline="none"> Trolley Wheels</Link></li>
            <li><Link href="/products" underline="none"> Grinding Tools</Link></li>
            </ul> 
            </Stack>
        </Grid>
        <Grid  item xs={12} md={3} lg={4} justifyContent='center'>
        <Stack sx={{alignItems:'center'}}>           
          <ul style={{listStyle:'none' , display:'list-item' , textAlign:'left'}}>
            <Typography variant="h5" color="initial" fontWeight={600} fontSize={17} marginBottom={1}>Featured products</Typography>
            <li><Link href="/products" underline="none">Coolant Pipes</Link></li>
            <li><Link href="/products" underline="none">Lubrication Fittings</Link></li>
            <li><Link href="/products" underline="none">Belt Bearing</Link></li>
            <li><Link href="/products" underline="none">All types of hoses</Link></li>
            <li><Link href="/products" underline="none"> Measuring Instrument</Link></li>
            <li><Link href="/products" underline="none"> tiff</Link></li>
            </ul>
            </Stack>
        </Grid>
      </Grid>
  )
}
