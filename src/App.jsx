import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import HomePage from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking.jsx";
import Contact from "./Pages/Contact/Contact";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="booking" element={<Booking />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
