import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaShop from '../PizzaShop/PizzaShop';
import PizzaForm from '../PizzaForm/PizzaForm';
 
function App() {

  return (<>
  <PizzaForm />
   <PizzaShop />
   </>);
}

export default App;