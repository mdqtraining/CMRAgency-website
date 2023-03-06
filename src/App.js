import './App.css';
import { Routes , Route } from 'react-router-dom';
import React, {Suspense}  from 'react';
import Spinner from './components/spinner/Spinner';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Proudcts from './components/routes/Products';
import Contact from './components/routes/Contact';
import FilledCart from './components/routes/CartPreview/FilledCart.jsx';
import CheckoutPage from './components/routes/CheckoutPage/CheckoutPage';

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
        <Route path='checkout' element={<CheckoutPage />}></Route>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
