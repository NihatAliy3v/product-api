import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";
import "./base.scss";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/createProduct" element={<CreateProduct />} />
      </Routes>
    </main>
  );
}

export default App;
