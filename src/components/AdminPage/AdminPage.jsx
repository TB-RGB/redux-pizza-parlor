import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function AdminPage() {

    const dispatch = useDispatch()


    const customerList = useSelector(store => store.customerList)


    useEffect(() => {

        fetchOrders();

    }, [])

    //Tough to debug
    const fetchOrders = () => {
        axios.get('api/order')
        .then((response) => {
          // Dispatch
          
          dispatch({type: 'SET_ORDER', payload: response.data})
    
        })
        .catch(error => {
          console.log(error)
        })
    
      }





    return (



)

}

export default AdminPage;