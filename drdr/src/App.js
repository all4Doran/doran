import { Route, Routes } from "react-router";
import Test from "./pages/Test";
import AddFarm from "./pages/tree/AddFarm";
import ViewFarm from "./pages/tree/ViewFarm";
import ViewCarrot from "./pages/tree/ViewCarrot";
import Login from "./pages/member/Login";
import Signup from "./pages/member/Signup";
import Email from "./pages/member/Email";
import Pw from "./pages/member/Pw";
import Home from "./pages/tree/home.main";

import AddCarrot2 from "./pages/tree/addCarrot2";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test/>}/>

        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Email" element={<Email/>}/>
        <Route path="Pw" element={<Pw/>}/>
        <Route path="AddFarm" element={<AddFarm/>}/>
        <Route path="AddFarm/:info" element={<AddFarm/>}/>
        <Route path="ViewFarm" element={<ViewFarm/>}/>
        {/* <Route path="AddCarrot" element={<AddCarrot/>}/> */}
        <Route path="ViewCarrot" element={<ViewCarrot/>}/>
        <Route path="Home" element={<Home/>}/>

        <Route path="AddCarrot" element={<AddCarrot2/>}/>
        

        
      </Routes>
    </div>
    
  );
}

export default App;