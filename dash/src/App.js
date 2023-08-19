import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import Protected from "./pages/Protected";
import ProductList from "./pages/ProductList";
import SearchProduct from "./pages/searchProduct";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/add" element={<AddProduct/>} /> */}
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/" element={<Protected Cmp={ProductList} />} />
          {/* <Route path="/update" element={<UpdateProduct/>} /> */}
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} /> } />
          <Route path="/search" element={<Protected Cmp={SearchProduct} /> } />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
