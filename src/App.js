import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList" 
import Product from "./pages/Product" 
import "./base.scss"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
