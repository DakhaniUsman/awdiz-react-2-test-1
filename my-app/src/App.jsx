import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './components/AllProducts';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Navigation from './components/Navigation';

function App() {

  return (
  
    <div className="App">
      <Navigation />
        <Routes>
          {/* <Route path='/' element={<AllProducts />}/> */}
          <Route path='/add-product' element={<AddProduct />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
    </div>
  );
}

export default App;
