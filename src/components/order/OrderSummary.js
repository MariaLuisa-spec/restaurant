function OrderSummary({ order }) {
    const total = order.reduce((acc, plate) => acc + plate.price * plate.quantity, 0);
  
    return (
      <div>
        <h2>Lista de pedidos</h2>
        <ul>
          {order.map((plate) => (
            <li key={plate.id}>
              {plate.name} x{plate.quantity}
            </li>
          ))}
        </ul>
        <p>Total a pagar: {total}</p>
      </div>
    );
  }
  