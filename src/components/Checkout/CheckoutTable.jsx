const CheckoutTable = ({ tableArray }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
          {tableArray.map((order, i) => (
            <tr key={i}>
              <td>{`${order.name}`}</td>
              <td>{`${order.amount}`}</td>
              <td>{`$${order.price}`}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CheckoutTable;
