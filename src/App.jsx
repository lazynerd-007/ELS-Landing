import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import HomePage from "./Pages/Home/Home";
import HomePageV2 from "./Pages/Home-v2/Home";
import Contact from "./Pages/Contact/Contact";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="v2" element={<HomePageV2 />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
