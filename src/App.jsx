// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTest from "./pages/Main";
import Qr from "./pages/QR";
import GotHacked from "./pages/GotHacked";

import "./App.css";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MyTest />} />
                    <Route path="/qr" element={<Qr />} />
                    <Route path="/gothacked" element={<GotHacked />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;