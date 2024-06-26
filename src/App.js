import "./index.css";
import {Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Inclusive from "./routes/Inclusive";
import About from "./routes/About";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";


export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/inclusive" element={<Inclusive/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>

        
        </div>
    )
}