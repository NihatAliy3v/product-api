import { Route, Routes } from "react-router-dom";
import "./base.scss";
import { CartProvider } from "./CartContext";
import Header from "./components/Header";
//Pages
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";
import EditProduct from "./pages/EditProduct";
import Cart from "./pages/Cart";

function App() {
  return (
    <main className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </main>
  );
}

export default App;
