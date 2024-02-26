import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/sucess" element={<Success></Success>}></Route>
        <Route path="/cancel" element={<Cancel></Cancel>}></Route>
      </Routes>
    </>
  );
}

export default App;
