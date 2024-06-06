import { useState } from "react";
import { useHistory } from "react-router-dom";

function PizzaForm(){
   
    let [customerToAdd, setCustomerToAdd] = useState({ 
        customerName:'',
        streetName:'',
        city: '',
        zip: ''

    });

    
    const [isPickup, setIsPickup] = useState(true)

    const handlePickupClick = () => {
        setIsPickup(true);
        console.log('Pickup button clicked');
      };

      const handleDeliveryClick = () => {
        setIsPickup(false);
        console.log('Delivery button clicked');
      };


    const handleNameChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          customerName: event.target.value,
        });
      }
      const handleStreetNameChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          streetName: event.target.value,
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
        console.log('Next button working')
        history.push('/checkout'); 
      }
      

    const history = useHistory();

    return(
        <form onSubmit= {addCustomer}>

            <h2> Step 2: Customer Information</h2>
            <input
            onChange={handleNameChange}
            value={customerToAdd.customerName}
            placeholder="Name"/>
            
            <input
            onChange={handleStreetNameChange}
            value={customerToAdd.streetName}
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
     


     <p>Name: {customerToAdd.customerName}</p>
      <p>Street Address: {customerToAdd.streetName}</p>
      <p>City: {customerToAdd.city}</p>
      <p>Zip: {customerToAdd.zip}</p>

      <p> You chose: {isPickup ? 'Pickup' : 'Delivery'}</p>

      <button type="submit"> NEXT </button>
        </form>

    )
}



export default PizzaForm