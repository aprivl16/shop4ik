import { Route, Routes } from "react-router-dom";
import "./App.css";
import Earn from "./pages/EarnPage/Earn.jsx";
import Shop from './pages/ShopPage/Shop.jsx';
import Navbar from "./ui/Navbar.jsx";
import Inventory from "./pages/InventoryPage/Inventory.jsx";
import WelcomePage from "./ui/WelcomePage.jsx";


function App() {  
  return (
    <div >
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<WelcomePage/>}></Route>
          <Route path="/shop" element={<Shop />}>Shop</Route>
          <Route path="/inventory" element={<Inventory />}>Inventory</Route>
          <Route path="/earn" element={<Earn />}>Make Money</Route>
        </Routes>
      </div>
    </div>
  )
}
export default App;