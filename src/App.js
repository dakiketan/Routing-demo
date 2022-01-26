import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Consulting from "./pages/Consulting";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Product from "./pages/Product";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";

function App() {
  return(
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/services" exact component={Services} />
      <Route path="/products" exact component={Product} />
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/marketing" exact component={Marketing} />
      <Route path="/consulting" exact component={Consulting} />
    </Switch>
    </Router>
    </>
  )
}

export default App;