import Home from './Page/Home';
import './index.css'
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div className="overflow-hidden">
      {/* <Routing /> */}

      <Home />

    </div>
  );
}

function Routing() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/home" />} />

        <Route path='/home' element={
          <Home />
        }></Route>

      </Routes>
    </Router>
  );
}
