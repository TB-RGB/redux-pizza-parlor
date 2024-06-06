const CheckoutTable = ({ tableArray }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {tableArray.map((order, i) => (
            <tr key={i}>
              <td>{`${order.name}`}</td>
              <td>{`$${order.price}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CheckoutTable;
