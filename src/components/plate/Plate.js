import React, { useState } from 'react';
import styles from './Plate.module.css';

const Plate = ({ title, image, description, price, handleAddToCart }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    handleAddToCart(title, 1, price);
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const shortDescription = description ? description.slice(0, 10) : "";
  const fullDescription = description || "";

  return (
    <div className={styles.plate} >
      <h2>{title}</h2>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <p>
        {expanded ? fullDescription : shortDescription}
        {!expanded && description && description.length > 10 ? (
          <button onClick={handleExpand}>Ver más</button>
        ) : null}
      </p>
      <button className={styles.addButton} onClick={handleClick}>Añadir</button>
      <p className={styles.price} >Precio: {price}</p>
    </div>
  );
};

export default Plate;

