//import logo from './logo.svg';
import './App.css';  
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products';
import Contact from './pages/Contact';
import NoPage from './../src/components/common/NoPage';
import ScrollToTop from 'react-scroll-to-top';
import ProductDetailPage from './pages/ProductDetailPage';
import Searchbar from './components/common/Searchbar';
import MyContextProvider from './MyContextProvider';
import Checkout from './pages/Checkout';
import PaymentGateway from './pages/PaymentGateway';

function App() {
  return (
        
    <BrowserRouter>  
    <MyContextProvider>
    <Header/>            
    <Routes>             
      <Route path="/" element={<Home/>}/>
      <Route path="/Products/:product/" element={<Products/>}/>
      <Route path="/Products/:product/:productdetails" element={<ProductDetailPage/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/PaymentGateway" element={<PaymentGateway/>}/>
      <Route path="*" element={<NoPage/>}/>      
    </Routes>
    <Footer/>
    <ScrollToTop smooth color="blue" style={{textAlign:"-webkit-center"}}/>    
    </MyContextProvider>  
    </BrowserRouter>   
  );
}

export default App;
