import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/list" element={<ListProduct />} />
      </Routes>
    </div>
  );
}

export default App;
