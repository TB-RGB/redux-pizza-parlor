import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './PizzaItem.css'
const PizzaItem = ({pizza}) => {


const [pizzaCount, setPizzaCount] = useState(0)
const [showDescription, setShowDescription] = useState(false);
const cart = useSelector(store => store.cart)
const pizzas = useSelector((store) => store.pizzas);
const dispatch = useDispatch()

useEffect(() => {
    // Update pizza count whenever the cart or pizzas change
    const pizzaInCart = cart.pizzas.find(order => order.id === pizza.id);
    if (pizzaInCart) {
      setPizzaCount(pizzaInCart.quantity);
    } else {
      setPizzaCount(0);
    }
  }, [cart, pizza, pizzas]);

  
const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const addMorePizza = () => {
    dispatch({ type: 'ADD_PIZZA', payload: { id: pizza.id } });
    setPizzaCount(prevCount => prevCount + 1)
  };
  const removePizza = () => {
    dispatch({ type: 'DROP_PIZZAS', payload: { id: pizza.id } });
    setPizzaCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };
  
    return (
        
        <div className="pizza_item_container">
            <div>
                <strong>{pizza.id}</strong>
            </div>
            <div>
            <strong>{pizza.name}</strong>
            </div>
            <div>
            <strong>{pizza.price}</strong>
            </div>
           
            <div onClick={toggleDescription}>
            {showDescription ? <div className="center" ><p className='pizza_description'>{pizza.description}</p></div> : <img src={pizza.image_path}></img>}
            </div>
            <div className='spread'>
                <button className="remove" onClick={() => {removePizza()}}>−</button><span className='pizzacount'>{pizzaCount}</span><button className='add' onClick={() => {addMorePizza()}}>✚</button>
            </div>
            

        </div>
        
    )

}
export default PizzaItem