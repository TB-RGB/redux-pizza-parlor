import { useSelector } from "react-redux"

const OrderInfo = ()=>{
    const customerInfo = useSelector(store=>store.customerInfo)

    return(
        <>
        <h2>Step 3: Checkout</h2>
        <p>{customerInfo.customer_name}</p>
        <p>{customerInfo.street_address}</p>
        <p>{customerInfo.city} {customerInfo.zip}</p>

        <div>{customerInfo.type}</div>
        </>
    )
}

export default OrderInfo