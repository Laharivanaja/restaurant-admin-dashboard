import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MenuManagement from "./pages/MenuManagement.jsx";
import OrdersDashboard from "./pages/OrdersDashboard.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Menu</Link>
        <Link to="/orders">Orders</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MenuManagement />} />
        <Route path="/orders" element={<OrdersDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
