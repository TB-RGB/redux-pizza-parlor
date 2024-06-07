import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import './PizzaForm.css'
function PizzaForm(){
  const dispatch = useDispatch()
    let [customerToAdd, setCustomerToAdd] = useState({
        customer_name:'',
        street_address:'',
        city: '',
        zip: '',
        type: ''
    });
    const [isPickup, setIsPickup] = useState(true)
    const handlePickupClick = () => {
        setIsPickup(true);
        setCustomerToAdd({
          ...customerToAdd,
          type: 'Pickup'
        })
        console.log('Pickup button clicked');
      };
      const handleDeliveryClick = () => {
        setIsPickup(false);
        setCustomerToAdd({
          ...customerToAdd,
          type: 'Delivery'
        })
        console.log('Delivery button clicked');
      };
    const handleNameChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          customer_name: event.target.value,
        });
      }
      const handleStreetNameChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          street_address: event.target.value,
        });
      }
      const handleCityChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          city: event.target.value,
        });
      }
      const handleZipChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          zip: event.target.value,
        });
      }
      const addCustomer = (event) =>{
        event.preventDefault();
        dispatch({type: 'ADD_INFO', payload: customerToAdd})
        console.log('Next button working')
        history.push('/checkout');
      }
    const history = useHistory();
    return(
        <form onSubmit= {addCustomer}>
            <h2 class='pizzaFormH2'> Step 2: Customer Information</h2>
            <input
            class='inputs'
            onChange={handleNameChange}
            value={customerToAdd.customerName}
            placeholder="Name"/>
            <input
            class='inputs'
            onChange={handleStreetNameChange}
            value={customerToAdd.streetName}
            placeholder="Street Address"/>
            <input
            class='inputs'
            onChange={handleCityChange}
            value={customerToAdd.city}
            placeholder="City"/>
            <input
            class='inputs'
            onChange={handleZipChange}
            value={customerToAdd.zip}
            placeholder="Zip"
            />
            <div>
    <button class='pickup' type="button" onClick={handlePickupClick}>
        Pickup
      </button>
      <button class='delivery' type="button" onClick={handleDeliveryClick}>
        Delivery
      </button>
     </div>
     <p>Name: {customerToAdd.customerName}</p>
      <p>Street Address: {customerToAdd.streetName}</p>
      <p>City: {customerToAdd.city}</p>
      <p>Zip: {customerToAdd.zip}</p>
      <p> You chose: {isPickup ? 'Pickup' : 'Delivery'}</p>
      <button class='next' type="submit"> NEXT </button>
        </form>
    )
}
export default PizzaForm