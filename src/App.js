import './App.css';
import { Routes , Route } from 'react-router-dom';
import React, {Suspense}  from 'react';
import Spinner from './components/spinner/Spinner';
const Home = React.lazy(()=>import("./components/routes/Home"));
const About = React.lazy(()=>import("./components/routes/About"));
const Proudcts = React.lazy(()=>import("./components/routes/Products"));
const Contact = React.lazy(()=>import("./components/routes/Contact"));
const CheckoutPage = React.lazy(()=>import("./components/routes/CheckoutPage/CheckoutPage"));
const FilledCart = React.lazy(()=>import('./components/routes/CartPreview/FilledCart'));

function App() {
 


  return (
    <div className="App">
      <Suspense fallback={<h1><Spinner /></h1>}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='products' element={<Proudcts />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='cartpreview' element={<FilledCart />}></Route>
        <Route path='checkout' element={<CheckoutPage/>}></Route>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
