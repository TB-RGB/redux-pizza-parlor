import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './AdminPage.css'

function AdminPage() {


  const orderList = useSelector(store => store.orderList)
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
          
          dispatch({type: 'FETCH_ORDER', payload: response.data})
    
        })
        .catch(error => {
          console.log(error)
        })
    
      }

      const formatDate = (rawDate) => {
        const date = new Date(rawDate);
        return date.toLocaleString(); // You can customize this method according to your preferred date format
      };



    return (<div className='admin_page'>
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
          Time Order Placed
          </th>
          <th>
          Type
          </th>
          <th>
          Cost
          </th>
        </tr>
      </thead>
      <tbody>
  {orderList.map((orders) => 
    <tr key={orders.id}>
      <td>
        {orders.customer_name}
      </td>
      <td>
        {formatDate(orders.time)}
      </td>
      <td>
        {orders.type}
      </td>
      <td>
        {orders.total}
      </td>
    </tr>
  )}
  </tbody>
  </table>
    </div>)

}

export default AdminPage;