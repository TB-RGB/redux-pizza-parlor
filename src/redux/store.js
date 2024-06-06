import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzas = (state = [], action) => {
  switch(action.type){
    case 'SET_PIZZAS':
      return action.payload
    default:
      return state
  }
}

const customerInfo = (state={}, action)=>{
  switch(action.type){
    case 'ADD_INFO':
      return action.payload
    default:
      return state
  }
}

const cart = (state={ pizzas: []},action)=>{
  switch(action.type) {
    case 'ADD_PIZZA':
      const pizzaIdToAdd = action.payload.id;
      const pizzaAlreadyInCart = state.pizzas.find(pizza => pizza.id === pizzaIdToAdd);

      if (pizzaAlreadyInCart) {
        // If the pizza already exists in the cart, do nothing
        return state;
      } else {
        // If the pizza doesn't exist in the cart, add it
        return {
          ...state,
          pizzas: [
            ...state.pizzas,
            { id: pizzaIdToAdd, quantity: 1 }
          ]
        };
      }
    
    case 'DROP_PIZZAS':
      return state.pizzas.filter(pizza=>pizza.id != action.payload.id)
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    pizzas,
    customerInfo,
    cart // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
