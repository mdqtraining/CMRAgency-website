import {Grid, Link,ListItem, ListItemText, Typography } from "@mui/material"
import { Box} from "@mui/system"
// import { Link } from "react-router-dom"

export default function BottomShortcut() {
  return (
    <Box>
      <Grid container mt={5}>
          <Grid item xs={4} >
            <Typography variant="h5" color="initial">Quick links</Typography>
            <ListItem><ListItemText><Link href="/products" underline="none">Home</Link></ListItemText></ListItem>
            <ListItem><ListItemText><Link href="/products" underline="none">about</Link></ListItemText></ListItem>
            <ListItem> <ListItemText><Link href="/products" underline="none">Products</Link></ListItemText></ListItem>
            <ListItem><ListItemText><Link href="/products" underline="none"> Contact</Link></ListItemText></ListItem>
          </Grid>
        <Grid item xs={4}>
            <Typography variant="h5" color="initial">Our products</Typography>
            <ListItem><ListItemText><Link href="/products" underline="none">Pnuematics</Link></ListItemText></ListItem>
            <ListItem><ListItemText><Link href="/products" underline="none">Hydraulics</Link></ListItemText></ListItem>
            <ListItem> <ListItemText><Link href="/products" underline="none">Hand Tools</Link></ListItemText></ListItem>
            <ListItem><ListItemText><Link href="/products" underline="none"> Trolley Wheels</Link></ListItemText></ListItem>
            <ListItem><ListItemText><Link href="/products" underline="none"> Cutting & Grinding Tools</Link></ListItemText></ListItem>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="h5" color="initial">Featured products</Typography>
            <ListItem><ListItemText><Link href="/products" underline="none">Coolant Pipes & Lubrication Fittings</Link></ListItemText></ListItem>
            <ListItem><ListItemText><Link href="/products" underline="none">Belt Bearing</Link></ListItemText></ListItem>
            <ListItem> <ListItemText><Link href="/products" underline="none">All types of hoses</Link></ListItemText></ListItem>
            <ListItem><ListItemText><Link href="/products" underline="none"> Measuring Instrument</Link></ListItemText></ListItem>
            <ListItem><ListItemText><Link href="/products" underline="none"> tiff</Link></ListItemText></ListItem>
        </Grid>
      </Grid>
    </Box>
  )
}
