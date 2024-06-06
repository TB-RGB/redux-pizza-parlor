import CheckoutHeader from "./CheckoutHeader"
import CheckoutTable from "./CheckoutTable"
import OrderInfo from "./OrderInfo"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


const Checkout = ()=>{
    const dispatch = useDispatch()
    const history = useHistory()

    const customerInfo = useSelector(store=>store.customerInfo)
    const cart = useSelector(store=>store.cart)
    const pizzas = useSelector(store=>store.pizzas)


   

    let tableArray = []
    let price = 0

    pizzas.map((pizza) => {
        for (let order of cart.pizzas) {
          if (order.id === pizza.id) {
            price += Number(pizza.price);
            tableArray.push({name: pizza.name, price: pizza.price})
    
          }
        }
      });

      let fullOrder = {...customerInfo, total: price, ...cart}
    //   console.log(fullOrder)
      const postOrder =()=>{
        axios.post('/api/order', fullOrder)
            .then(response =>{
                dispatch({type: 'DROP_CART'})
                history.push('/')
                // dispatch to clear cart
                // history to navigate to step 1
            })
            .catch(err=>{
                console.error('Error in post order', err)
            })
      }

    

    return(
        <>
        <CheckoutHeader />
        <OrderInfo />
        <CheckoutTable tableArray={tableArray} />
        <h3>${price}</h3>
        <button onClick={()=>postOrder()}>Checkout</button>
        <br />
        {JSON.stringify(fullOrder)}
        </>
    )
}

export default Checkout