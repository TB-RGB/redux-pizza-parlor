import { useSelector } from "react-redux"
import PizzaItem from "../PizzaItem/PizzaItem"
import './PizzaList.css'

const PizzaList = () => {

    const pizzaList = useSelector(store => store.pizzas)

    return (
        
        <div className="store">
        <div className="pizza_list">
            
        {pizzaList.map((pizza) => 
            
                <PizzaItem
                key={pizza.id}
                pizza={pizza}
                />
            
        )}
        
        </div>
        </div>
    )

}

export default PizzaList