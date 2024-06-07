import { AppBar, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
      <AppBar position="static">
        <Typography variant="h2" align="center">Prime Pizza</Typography>
        <IconButton edge='end'>
            <ShoppingCartIcon />
            Total: {`$${price}`}
            </IconButton>
      </AppBar>
    </>
  );
};

export default Header;
