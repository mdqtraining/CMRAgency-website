import { Box, Grid } from '@mui/material';
import React ,{Suspense} from 'react';
const Icons = React.lazy(()=>import("../Icons/Icon"));
const Searchbox = React.lazy(()=>import("../Searchbox/Searchbox"));
const Spinner = React.lazy(()=>import('../../spinner/Spinner'))

export default function HeadSection() {
  return (
    <Box >
     <Suspense fallback={<h1><Spinner /></h1>}>
        <Icons />
        <Searchbox />
        </Suspense> 
    </Box>
  )
}
