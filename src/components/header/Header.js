import React from 'react';
import Button from '../button/Button';
import styles from './Header.module.css';
import Sidebar from '../sidebar/Sidebar';

const Header = ({ setSelectedMenu, items, cartTotal }) => {
   
    const handleClick = (menu) => {
        setSelectedMenu(menu);
      }

  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button label="Platos" onClick={() => handleClick('plate')} />
        <Button label="Postres" onClick={() => handleClick('dessert')} />
        <Button label="Bebidas" onClick={() => handleClick('drink')} />
      </div>
      <Sidebar items={items} cartTotal={cartTotal}/>
    </div>
  );
};

export default Header;

