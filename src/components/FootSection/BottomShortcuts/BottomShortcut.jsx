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
            <li><Link href="/products" underline="none" color='#0097a7'>FMC Seal</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'>Plungers</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'>Chinese Fingers</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'> Drill Bits</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'> Tri Cone Bits</Link></li>
            </ul> 
        </Grid>
        <Grid  item xs={12} sm={12} md={3} lg={3} className='btmlinkgrid' mb={2}>   
          <ul style={{listStyle:'none' , display:'list-item' , textAlign:'left'}}>
            <Typography variant="h5" color="initial" fontWeight={600} fontSize={17} marginBottom={1}>Featured products</Typography>
            <li><Link href="/products" underline="none" color='#0097a7'>D-Shackle</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'>Bow Shackle</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'>Rock Reamers</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'> HDD Hole Opener</Link></li>
            <li><Link href="/products" underline="none" color='#0097a7'> Drilling Pilots</Link></li>
            </ul>
        </Grid>
      </Grid>
  )
}
