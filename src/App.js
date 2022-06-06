import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Home from "./components/Home";
import Team from "./components/Team";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Service" component={Service} />
          <Route exact path="/Team" component={Team} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
