import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


import './App.css';
import OrderForm from './components/OrderForm.tsx';
import CustomerForm from './components/CustomerForm.tsx';
import ProductForm from './components/ProductForm.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">

          <div>
            <nav>
              <Navigation nav={"Order Management"} url='/orderManagement' />
            </nav>
          </div>
          <Routes>
            <Route path={"/orderManagement"} element={<OrderForm />} />
          </Routes>
          <nav>
            <Navigation nav={"Customer create"} url='/customerCreate' />
          </nav>

          <Routes>
            <Route path={"/customerCreate"} element={<CustomerForm />} />
          </Routes>
          <nav>
            <Navigation nav={"Product create"} url='/productCreate' />
          </nav>

          <Routes>
            <Route path={"/productCreate"} element={<ProductForm />} />
          </Routes>
        </div >
      </BrowserRouter >
    </>
  );
}

function Navigation({ url, nav }) {
  return (
    <li>
      <Link to={url}>{nav}</Link>
    </li>
  );
}

export default App;
