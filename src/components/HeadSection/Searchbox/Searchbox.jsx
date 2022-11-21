import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';


export default function Searchbox() {
  return (
      <Grid container spacing={2} alignItems='center' rowSpacing={2} mb={2}>
             <Grid item xs={12} sm={12} lg={2}>
            <Box component='img' marginRight={5} marginLeft={2} src="https://igreentec.in/img/facilities/LOGO.png" alt="logo" 
            sx={{width:180 , height:100 }}>
          </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
          <Box>
        <TextField
        sx={{width:'30ch'}}
            size='small'
            id="inputName"
            defaultValue=""
            variant='outlined'
            placeholder='Search any products *'
          />
        <Button variant='contained' sx={{height:40 , bgcolor:'#7EC948' }}>Search</Button>
        </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
        <Box>
        <CallIcon  fontSize='xs' sx={{verticalAlign:'middle' ,color:'#7EC948' }} ></CallIcon><Typography component='span' fontSize='small' marginRight={2}> +91 7505054321</Typography>
        <MailIcon  fontSize='xs' sx={{verticalAlign:'middle' , color:'#7EC948' }}></MailIcon><Typography component='span' fontSize='small'> production@igreentec.in</Typography>
        </Box>
        </Grid>
      </Grid>
  )
}
