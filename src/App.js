import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Shipping from "./components/Shipping";
import Channel from "./components/Channel";
import OrderDetails from "./components/OrderDetails/OrderDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/orders" element={<OrderDetails />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/channel" element={<Channel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
