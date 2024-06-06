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
        axios.get('/api/order')

            .then((res) => {

                dispatch({
                    type: 'SET_ORDERS',
                    payload: res.data,
                });

            })
            .catch(err => {
                console.error('FAILED GET /api/order', err)
            })
    }





    return (



)

}

export default AdminPage;