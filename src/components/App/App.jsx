import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import PizzaShop from "../PizzaShop/PizzaShop";
import PizzaForm from "../PizzaForm/PizzaForm";
import Checkout from "../Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <Route exact path='/'>
            <PizzaShop />
        </Route>

        <Route path='/infoForm'>
            <PizzaForm />
        </Route>

        <Route path='/checkout'>
          <Checkout />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
