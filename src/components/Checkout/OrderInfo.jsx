import './OrderInfo.css'
import { useSelector } from "react-redux"

const OrderInfo = ()=>{
    const customerInfo = useSelector(store=>store.customerInfo)

    return(
        <>
        <div className='flex'>
        <div className="customer_container">
        <div className="customer_info">
        <h3>Step 3: Checkout</h3>
        
        <p><strong>{customerInfo.customer_name}</strong></p>
        <p><strong>{customerInfo.street_address}</strong></p>
        <p><strong>{customerInfo.city} {customerInfo.zip}</strong></p>
       
        </div>
        <p></p>
        <div className="order_type"><strong>For {customerInfo.type}</strong></div>
        </div>
        
        </div>
        
        </>
    )
}

export default OrderInfo