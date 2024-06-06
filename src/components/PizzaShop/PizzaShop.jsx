import axios from "axios"
import { useDispatch } from "react-redux"
const PizzaShop = () => {

    const dispatch = useDispatch()

axios.get('/api/pizza')
.then((response) => {
    dispatch({type: 'SET_PIZZAS', payload: response.data})
})
.catch((err) => {
    console.error("Cowabunga Dude...Error getting Pizzas", err)
})

    return (
        <>
        
        </>
    )

}

export default PizzaShop