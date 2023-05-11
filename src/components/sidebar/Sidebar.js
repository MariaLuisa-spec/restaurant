import React, {useState} from 'react';

const Sidebar = ({ items, cartTotal }) => {
  const [expanded, setExpanded] = useState(false);
  const totalItems = items ? items.reduce((total, item) => total + item.quantity, 0) : 0;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button onClick={handleExpand}>{totalItems} Cart</button>
      {expanded ? (
        <ul>
          {items && items.map((item, index) => (
            <li key={index}>
              {item.title} - Cantidad: {item.quantity}
            </li>
          ))}
          <p>Total: ${cartTotal}</p>
        </ul>
      ) : null}
    </div>
  );
};


export default Sidebar;