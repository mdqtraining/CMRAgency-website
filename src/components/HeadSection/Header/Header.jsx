import { Box } from '@mui/material';
import React ,{Suspense} from 'react';
const Icons = React.lazy(()=>import("../Icons/Icon"));
const Searchbox = React.lazy(()=>import("../Searchbox/Searchbox"));

export default function HeadSection() {
  return (
    <Box>
     <Suspense fallback={<h1>Loading</h1>}>
      <Icons />
        <Searchbox />
        </Suspense> 
    </Box>
  )
}
