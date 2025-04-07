// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GotHacked from "./pages/GotHacked";

import "./App.css";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<GotHacked />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
