import axios from "axios"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import PizzaList from "../PizzaList/PizzaList"
import Header from "../Header/Header"
const PizzaShop = () => {

    const dispatch = useDispatch()
useEffect(()=> {
fetchPizzas()
}, [])

    const fetchPizzas = () => {
axios.get('/api/pizza')
.then((response) => {
    dispatch({type: 'SET_PIZZAS', payload: response.data})
})
.catch((err) => {
    console.error("Cowabunga Dude...Error getting Pizzas", err)
})
}

    return (
        <>
        <Header />
        <PizzaList />
        </>
    )

}

export default PizzaShop