import axios from 'axios'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

function AdminPage(){

const dispatch = useDispatch()

//Get Request to the orders database
//

const customerList = useSelector(store => store.customerList)


useEffect(() => {
    
    fetchOrders(); 

}, [])




return(



)

}

export default AdminPage;