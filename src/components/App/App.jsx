import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import PizzaShop from "../PizzaShop/PizzaShop";
import PizzaForm from "../PizzaForm/PizzaForm";
import Checkout from "../Checkout/Checkout";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <Router>
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
