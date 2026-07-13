import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import the Navbar from the components folder
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// 2. Import your page views from the pages folder
import Home from './pages/home/Home';
// import Capabilities from './pages/capabilities/Capabilities';
import Products from './pages/products/Products';
// import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      {/* The Navbar stays visible at the top of every page */}
      <Navbar />

      {/* React Router swaps out the page below based on the address bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/capabilities" element={<Capabilities />} /> */}
        <Route path="/products" element={<Products />} />
        {/* <Route path="/about" element={<About />} />  */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;