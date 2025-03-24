import { Route, Routes } from "react-router-dom";
import "./App.css";
import Earn from "./components/Earn";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";
import WelcomePage from "./components/WelcomePage";


function App() {  
  return (
    <div >
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<WelcomePage/>}></Route>
          <Route path="/shop" element={<Shop />}>Shop</Route>
          <Route path="/inventary" element={<Inventory />}>Inventory</Route>
          <Route path="/earn" element={<Earn />}>Make Money</Route>
        </Routes>
      </div>
    </div>
  )
}
export default App;