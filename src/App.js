import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WebFont from 'webfontloader';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins:300,400,700']
      }
    });
  }, []);
  return (
    <Router>
      <div className="App" style={{ background: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png")', backgroundSize: 'cover', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
