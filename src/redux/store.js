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

const cart = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      const pizzaIdToAdd = action.payload.id;
      const pizzaAlreadyInCart = state.pizzas.find(pizza => pizza.id === pizzaIdToAdd);
      if (pizzaAlreadyInCart) {
        // If the pizza already exists in the cart, increase its quantity
        return {
          ...state,
          pizzas: state.pizzas.map(pizza =>
            pizza.id === pizzaIdToAdd
              ? { ...pizza, quantity: pizza.quantity + 1 }
              : pizza
          )
        };
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
      const pizzaIdToRemove = action.payload.id;
      const pizzaToRemove = state.pizzas.find(pizza => pizza.id === pizzaIdToRemove);
      if (pizzaToRemove && pizzaToRemove.quantity > 1) {
        // If the pizza exists and has a quantity greater than 1, decrease its quantity
        return {
          ...state,
          pizzas: state.pizzas.map(pizza =>
            pizza.id === pizzaIdToRemove
              ? { ...pizza, quantity: pizza.quantity - 1 }
              : pizza
          )
        };
      } else {
        // If the pizza doesn't exist or has a quantity of 1, remove it from the cart
        return {
          ...state,
          pizzas: state.pizzas.filter(pizza => pizza.id !== pizzaIdToRemove)
        };
      }
    default:
      return state;
  }
};

const orderList = (state=[], action) => {
  switch(action.type){
    case 'FETCH_ORDER':
      return action.payload
      default:
      return state
  }
}

const store = createStore(
  combineReducers({
    pizzas,
    customerInfo,
    cart,
    orderList // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
