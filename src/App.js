import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavbar from "./copmnent/AppNavbar";
import Products from "./copmnent/Products";
import Cart from "./copmnent/Cart";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
