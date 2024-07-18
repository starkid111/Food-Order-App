import Cart from "./Components/Carts/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <>
    <Header />
    <main>
      <Meals />
    </main>
    <Cart />
    </>
  );
}

export default App;

