import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/consultation" component={Consultation} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
  