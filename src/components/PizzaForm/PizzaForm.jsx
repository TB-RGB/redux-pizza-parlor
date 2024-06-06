import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
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

            <h2> Step 2: Customer Information</h2>
            <input
            onChange={handleNameChange}
            value={customerToAdd.customer_name}
            placeholder="Name"/>
            
            <input
            onChange={handleStreetNameChange}
            value={customerToAdd.street_address}
            placeholder="Street Address"/>
            <input
            onChange={handleCityChange}
            value={customerToAdd.city}
            placeholder="City"/>
            <input
            onChange={handleZipChange}
            value={customerToAdd.zip}
            placeholder="Zip"
            />

    <button type="button" onClick={handlePickupClick}>
        Pickup
      </button>
      <button type="button" onClick={handleDeliveryClick}>
        Delivery
      </button>
     


     <p>Name: {customerToAdd.customer_name}</p>
      <p>Street Address: {customerToAdd.street_address}</p>
      <p>City: {customerToAdd.city}</p>
      <p>Zip: {customerToAdd.zip}</p>

      <p> You chose: {isPickup ? 'Pickup' : 'Delivery'}</p>

      <button type="submit"> NEXT </button>
        </form>

    )
}



export default PizzaForm