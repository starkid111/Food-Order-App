import { useState } from "react";
import Cart from "./Components/Carts/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {

const [CartIsShown, setCartIsShown] = useState(false)

const  ShowCartHandler = () => {
  setCartIsShown(true)
}

const HideCartHandler = () => {
  setCartIsShown(false)
}




  return (
    <>
    <Header  onShowCart = {ShowCartHandler} />
    {CartIsShown && <Cart onClose = {HideCartHandler}/>}
    <main>
      <Meals />
    </main>
    </>
  );
}

export default App;

