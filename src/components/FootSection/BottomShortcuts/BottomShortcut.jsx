import {Grid, Link, Typography } from "@mui/material";

export default function BottomShortcut() {
  return (
      <Grid className="bottomlink" container mt={8} mb={8} spacing={1} justifyContent='space-evenly' alignItems='center'>
          <Grid item xs={12} sm={12} md={3} lg={3} className='btmlinkgrid' mb={2}>
           <ul style={{listStyle:'none' , display:'list-item' , textAlign:'left'}}>
           <Typography variant="h5" color="initial" fontWeight={600} fontSize={17} marginBottom={1}>Quick links</Typography>
            <li><Link href="/" underline="none" color='#0097a7'>Home</Link></li>
            <li><Link href="/about" underline="none" color='#0097a7'>about</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'>Products</Link></li>
            <li><Link href="/contact" underline="none" color='#0097a7'> Contact</Link></li>
            </ul>
          </Grid>
        <Grid  item xs={12} sm={12} md={3} lg={3} className='btmlinkgrid' mb={2}>
          <ul style={{listStyle:'none' , display:'list-item' , textAlign:'left'}}>
            <Typography variant="h5" color="initial"fontWeight={600} fontSize={17} marginBottom={1}>Our products</Typography>
            <li><Link href="/products" underline="none" color='#0097a7'>Pnuematics</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'>Hydraulics</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'>Hand Tools</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'> Trolley Wheels</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'> Grinding Tools</Link></li>
            </ul> 
        </Grid>
        <Grid  item xs={12} sm={12} md={3} lg={3} className='btmlinkgrid' mb={2}>   
          <ul style={{listStyle:'none' , display:'list-item' , textAlign:'left'}}>
            <Typography variant="h5" color="initial" fontWeight={600} fontSize={17} marginBottom={1}>Featured products</Typography>
            <li><Link href="/products" underline="none" color='#0097a7'>Coolant Pipes</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'>Lubrication Fittings</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'>Belt Bearing</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'> All types of hoses</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'> Measuring Instrument</Link></li>
            </ul>
        </Grid>
      </Grid>
  )
}
