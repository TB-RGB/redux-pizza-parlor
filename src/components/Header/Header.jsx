import { useSelector } from "react-redux";

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
        <h1 className="App-title">Prime Pizza</h1>
        <span className="total">Total: {`$${price}`}</span>
      </header>
    </>
  );
};

export default Header;
