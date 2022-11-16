import React ,{Suspense} from 'react';

const Navbar = React.lazy(()=>import("../Navbar/Navbar"));
const Icons = React.lazy(()=>import("../Icons/Icon"));
const Searchbox = React.lazy(()=>import("../Searchbox/Searchbox"));

export default function HeadSection() {
  return (
    <div >
     <Suspense fallback={<h1>Loading</h1>}>
        <Icons />
        <Searchbox />
        <Navbar />
        </Suspense> 
    </div>
  )
}
