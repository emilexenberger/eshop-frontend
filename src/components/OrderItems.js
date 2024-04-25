import React from 'react';
import { Link } from 'react-router-dom';
import { orderBy } from 'lodash';


const OrderItems = ({ orderItems }) => {
  // Zoradíme orderItems podľa dateTime v zostupnom poradí (od najnovšieho po najstarší)
  const sortedOrderItems = orderBy(orderItems, ['dateTime'], ['desc']);

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <h1 className='text-center'>Cart</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="align-middle text-center">Order ID</th>
              <th className="align-middle text-center">Order time</th>
              <th className="align-middle text-center">Total price</th>
              <th className="align-middle text-left ps-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              sortedOrderItems.map(orderItem => (
                <tr key={orderItem.id}>
                  <td className="align-middle text-center">{orderItem.id}</td>
                  <td className="align-middle text-center">{orderItem.dateTime}</td>
                  <td className="align-middle text-end pe-4">{formatter.format(orderItem.totalPrice)}</td>
                  <td className="align-middle">
                    <Link to={`/order/${orderItem.id}`} type="button" className="btn btn-primary btn-sm mb-1 mx-1">Open order</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderItems;
