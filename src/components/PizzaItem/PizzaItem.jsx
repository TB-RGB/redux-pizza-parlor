import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './PizzaItem.css'
const PizzaItem = ({pizza}) => {



const [showDescription, setShowDescription] = useState(false);
const [inCart, setInCart] = useState(false)

const dispatch = useDispatch()

const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const toggleCart = () => {
    if (inCart === false){
        dispatch({type: 'ADD_PIZZA', payload: {id: pizza.id}})
    }
    if (inCart === true) {
        dispatch({type: 'DROP_PIZZAS', payload: {id: pizza.id}})
    }
    setInCart(!inCart)
  }
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
            <div className="clickable"onClick={() => toggleCart()}>
                {inCart ? <button className='remove'>REMOVE</button> : <button className='add'>ADD</button>}
            </div>
            

        </div>
        
    )

}
export default PizzaItem