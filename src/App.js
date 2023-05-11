import React, {useState} from 'react';
import Layout from './layout/Layout';
import Header from './components/header/Header';
import Body from './components/body/Body';
import platosData from './plates.json';

import './App.css';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('plate');
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const handleAddToCart = (title, quantity, price) => {
    const itemIndex = cartItems.findIndex((item) => item.title === title);
    if (itemIndex >= 0) { 
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += quantity;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { title, quantity }]);
    }
    setCartTotal(cartTotal + (price * quantity));
  };
  return (
    <div className="App">
      <Layout 
      header={
      <Header setSelectedMenu={setSelectedMenu} items={cartItems} cartTotal={cartTotal} />
    } 
      content={
      <Body 
      selectedMenu={selectedMenu} 
      setPlatos={platosData} 
      handleAddToCart={handleAddToCart} />
    }

      />
    </div>
  );
}

export default App;

