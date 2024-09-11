import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/CartContext";

const MealItem = ({ MealName, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const { addItems } = cartCtx;

  const AddToCartHandler = (amount) => {
    const item = {
      name: MealName,
      id: id,
      price: price,
      amount: amount,
    };
    addItems(item)
  };

  const MealPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{MealName}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{MealPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
