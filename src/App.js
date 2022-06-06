import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"
function App() {
  return (
    <div className="App">
      
         <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        {/* // Code here */}
      
    </div>
  );
}

export default App;