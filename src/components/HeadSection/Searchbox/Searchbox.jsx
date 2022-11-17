import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { display } from '@mui/system';


export default function Searchbox() {
  return (
      <Grid container spacing={2} alignItems='center' rowSpacing={2}>
        <Grid item xs={12} sm={2} md={3} lg={2}>
            <Box component='img' marginRight={5} src="https://www.igreentechnologies.in/img/logo.jpg" alt="logo" 
            sx={{width:120 , height:100 }}>
          </Box>
          </Grid>
          <Grid item xs={12} sm={10} lg={6}>
          <Box>
        <TextField
        sx={{width:'30ch'}}
            size='small'
            id="inputName"
            defaultValue=""
            variant='outlined'
            placeholder='Search any products *'
          />
        <Button variant='contained' color='success' sx={{height:40}}>Search</Button>
        </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={4}>
        <Box>
        <CallIcon color='success' fontSize='xs' sx={{verticalAlign:'middle'}} ></CallIcon><Typography component='span' fontSize='small' marginRight={2}> +91 7505054321</Typography>
        <MailIcon color='success' fontSize='xs' sx={{verticalAlign:'middle'}}></MailIcon><Typography component='span' fontSize='small'> production@igreentec.in</Typography>
        </Box>
        </Grid>
      </Grid>
  )
}
