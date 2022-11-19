import { Box, Container} from "@mui/system";
import { useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Button, Grid, Typography } from "@mui/material";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    return (
        <Container sx={{height:350}} >
      <Grid container sx={{width:'100%' , position:'relative'}}>
        <Grid item xs={12} sm={12} lg={12}>
        <Box>
          <Box onClick={goToPrevious} sx={{position:'absolute' , top:'50%', left:'2%' , zIndex:1}} >
           <ArrowCircleLeftIcon fontSize="large" sx={{color:'#ffff' }}/>
          </Box>
          <Box onClick={goToNext} sx={{position:'absolute' , top:'50%' , right:'2%', zIndex:1}} >
            <ArrowCircleRightIcon fontSize="large" sx={{color:'#ffff' }} />
          </Box>
        </Box>
        <Box sx={{ width:'100%', height:350 ,backgroundSize:'cover',backgroundPosition:'center', backgroundImage:`url(${slides[currentIndex].url})`}}>
            <Box className='sliderbox' component='div' sx={{width:500 , bgcolor:'#ffff' , position :'absolute' , top:'30%' , left:'10%'}}>
                <Typography className="slidetext" variant="h5" fontFamily={600} color='initial' marginTop={2}>{slides[currentIndex].title}</Typography>
                <Button className="btn" variant="contained" sx={{margin:5 , bgcolor:'#7EC948' }}>Read More</Button>
            </Box>
        </Box>
        <Box sx={{display:'flex' , justifyContent:'center'}}>
          {slides.map((slide, slideIndex) => (
            <Box
            sx={{margin:'0 3px' , cursor:'pointer' , color:'#ffff' , transform: `translate(${0}px, ${-50}px)`}}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </Box>
          ))}
        </Box>
        </Grid>
      </Grid>
      </Container>
    );
  };

  export default ImageSlider;