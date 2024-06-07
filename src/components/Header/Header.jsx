import { useSelector } from "react-redux";
import './Header.css'

const Header = () => {
  const cart = useSelector((store) => store.cart);
  const pizzas = useSelector((store) => store.pizzas);

  let price = 0;
 let totalQuantity = 0;
  pizzas.map((pizza) => {
    for (let order of cart.pizzas) {
      if (order.id === pizza.id) {
        price += Number(pizza.price)*order.quantity;
        totalQuantity += order.quantity
      }
    }
  });
  return (
    <>
      <header className="App-header">
        <div className="App-title">Prime <span className="pizza_text">Pizza</span></div>
        <div className="total"><span>{totalQuantity} Items in Cart</span><br/><span className="total">Total: {`$${price.toFixed(2)}`}</span></div>
      </header>
    </>
  );
};

export default Header;
