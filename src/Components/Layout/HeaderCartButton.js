import CartIcon from "../Carts/CartIcon";
import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/CartContext";


const HeaderCartButton = (props) => {
const cartCtx = useContext(CartContext);


const  numberOfCartItems = cartCtx.items.reduce((currentNumber, items) => {
    return currentNumber + items.amount
}, 0)


    return ( 
        <>
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
        </>
     );
}
 
export default HeaderCartButton;