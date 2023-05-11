import platosData from '../../plates.json';
import Plate from '../plate/Plate';


const Body = ({ selectedMenu, setPlatos, handleAddToCart }) => {
  const platos = platosData[selectedMenu];
  
  const handleClick = (title, price) => {
    
    const newPlatos = platos.map((plato) => {
      if (plato.title === title) {
        return { ...plato, quantity: plato.quantity + 1 };
      } else {
        return plato;
      }
    });
    handleAddToCart(title, 1, price);
    setPlatos(newPlatos);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: '2rem' }}>
      {platos.map((plato) => (
        <Plate
          key={plato.title}
          title={plato.title}
          image={plato.imagen}
          description={plato.description}
          price={plato.price}
          handleAddToCart={handleAddToCart}
          onClick={() => handleClick(plato.title, plato.price)}
        />
      ))}
    </div>
  );
};

export default Body;