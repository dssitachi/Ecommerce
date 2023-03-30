import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CheckoutSuccess from './pages/CheckoutSuccess';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
