import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import React, {useState} from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
      <button onClick={showCartHandler}>show</button>
    </CartProvider>
  );
}

export default App;
