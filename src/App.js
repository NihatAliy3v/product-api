import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";
import "./base.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/createProduct" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
