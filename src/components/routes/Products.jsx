import Header from "../HeadSection/Header/Header";
import Footer from '../FootSection/Footer/Footer';
import Navbar from '../HeadSection/Navbar/Navbar';

export default function Products() {
  const backImage = "https://www.cmragency.in/images/main-slider/product.jpg" ;
 
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <div style={{backgroundImage : `url(${backImage})` , backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px'}} >
          <h3>Product</h3>
          <p>An international family-owned business with a passion for sensor technology, encoders, measuring instruments and components for automated image processing.</p>
        </div>
        <div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
