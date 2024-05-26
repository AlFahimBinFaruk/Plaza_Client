import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import OrderDetails from './pages/OrderDetails';
import OrderHistory from './pages/OrderHistory';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>



        <Navbar />
        <div className='my-5 mx-auto w-80'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/product-details' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order-history' element={<OrderHistory />} />
            <Route path='/order-details' element={<OrderDetails />} />
          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
