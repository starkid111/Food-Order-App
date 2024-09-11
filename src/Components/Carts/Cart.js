import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../store/CartContext";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);


  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`

  const hasItem = CartCtx.items.length > 0

  const CartItemRemoveHandler = (id) => {
    CartCtx.removeItems(id)
  };

  const CartItemAddHandler = (item) => {
     CartCtx.addItems({...item , amount : 1})
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
        key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={CartItemRemoveHandler.bind(null , item.id)}
          onAdd={CartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
       {hasItem && <button className={classes.button}>Order</button>} 
      </div>
    </Modal>
  );
};

export default Cart;
