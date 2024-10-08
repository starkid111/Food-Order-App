import CartContext from "./CartContext";
import { useReducer } from "react";


const defaultCartState = {
    items : [],
    totalAmount : 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount ;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = [...state.items].concat(action.item);
        }

        return {
            items : updatedItems,
            totalAmount : updatedAmount,
        }
    }

  if (action.type === 'REMOVE')  {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);

    const existingItem = state.items[existingCartItemIndex];
    const updatedAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    
    if(existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
         const updatedItem = {
            ...existingItem,
            amount : existingItem.amount - 1
         }
         updatedItems = [...state.items];
         updatedItems[existingCartItemIndex] = updatedItem
    }

    return {
        items : updatedItems,
        totalAmount: updatedAmount
    }
  }

    return defaultCartState


}

const CartProvider  = (props) => {

    const [cartState , dispatchCartAction] = useReducer(cartReducer, defaultCartState)



   const addItemsHandler = (item) => {
          dispatchCartAction({type : 'ADD' , item : item})
   } 

   const removeItemsHandler = (id) => {
          dispatchCartAction({type : 'REMOVE', id : id})
   }

const cartCtx = {
    items :cartState.items,
    totalAmount : cartState.totalAmount,
    addItems : addItemsHandler,
    removeItems : removeItemsHandler

}


    return ( 
        <CartContext.Provider value={cartCtx}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;