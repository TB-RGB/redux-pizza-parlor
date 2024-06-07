import { Typography } from "@mui/material"
import { useSelector } from "react-redux"

const OrderInfo = ()=>{
    const customerInfo = useSelector(store=>store.customerInfo)

    return(
        <>
        <Typography variant="h3" sx={{my: 3}}>Step 3: Checkout</Typography>
        <Typography variant="h6">{customerInfo.customer_name}</Typography>
        <Typography variant="h6">{customerInfo.street_address}</Typography>
        <Typography variant="h6">{customerInfo.city} {customerInfo.zip}</Typography>

        <Typography variant="h4" align="right" sx={{mr: 3}}>Type: {customerInfo.type}</Typography>
        </>
    )
}

export default OrderInfo