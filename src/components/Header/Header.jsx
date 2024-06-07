import { useSelector } from "react-redux";
import './Header.css'

const Header = () => {
  const cart = useSelector((store) => store.cart);
  const pizzas = useSelector((store) => store.pizzas);

  let price = 0;

  pizzas.map((pizza) => {
    for (let order of cart.pizzas) {
      if (order.id === pizza.id) {
        price += Number(pizza.price);
      }
    }
  });
  return (
    <>
      <header className="App-header">
        <div className="App-title">Prime Pizza</div>
        <div className="total"><span>{cart.pizzas.length} Items in Cart</span><br/><span className="total">Total: {`$${price}`}</span></div>
      </header>
    </>
  );
};

export default Header;
