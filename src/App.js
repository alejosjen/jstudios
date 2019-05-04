import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
  