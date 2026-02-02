import './App.css'
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';

function App() {
    const [cartShown, setcartShown]=useState(false);

    const showCartHandler=()=>{
      setcartShown(true);
    }

    const hideCartHandler=()=>{
      setcartShown(false);
    }

  return (
    <CartProvider>
    {cartShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
    <main>
        <Meals />
    </main>
    </CartProvider>
  )
}

export default App
