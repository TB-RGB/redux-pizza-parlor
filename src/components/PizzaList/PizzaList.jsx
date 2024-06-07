import { useSelector } from "react-redux"
import PizzaItem from "../PizzaItem/PizzaItem"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './PizzaList.css'

const PizzaList = () => {

    const pizzaList = useSelector(store => store.pizzas)
    const history = useHistory()

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
        <button onClick={()=>history.push('/infoForm')}>Next</button>
        </div>
    )

}

export default PizzaList