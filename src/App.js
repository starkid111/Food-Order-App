import { useState } from "react";
import Cart from "./Components/Carts/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Components/store/CartProvider";

function App() {

const [CartIsShown, setCartIsShown] = useState(false)

const  ShowCartHandler = () => {
  setCartIsShown(true)
}

const HideCartHandler = () => {
  setCartIsShown(false)
}




  return (
    <CartProvider>
    <Header  onShowCart = {ShowCartHandler} />
    {CartIsShown && <Cart onClose = {HideCartHandler}/>}
    <main>
      <Meals />
    </main>
    </CartProvider>
  );
}

export default App;

