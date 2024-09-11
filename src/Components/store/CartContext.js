import React from "react";


const CartContext = React.createContext({
    items : [],
    totalAmount : 0,
    addItems : ((item)=>{console.log(item)}),
    removeItems : (id) => {}    
})


 
export default CartContext;