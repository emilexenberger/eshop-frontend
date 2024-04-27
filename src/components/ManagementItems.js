import React from 'react';
import { Link } from 'react-router-dom';

const ManagementItems = ({ eshopItems, deleteItem }) => {

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <h1 className='text-center'>Item Management</h1>
      <Link to="/item/create" type="button" className="btn btn-primary btn-sm mb-1 mx-1">Add Item</Link>
      <div className='row'>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="align-middle text-center">Product code</th>
              <th className="align-middle text-center">Product name</th>
              <th className="align-middle text-center">Volume</th>
              <th className="align-middle text-center">Price</th>
              <th className="align-middle text-left ps-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              eshopItems.map(eshopItem => (
                eshopItem.volume > 0 &&
                <tr key={eshopItem.id}>
                  <td className="align-middle text-center">{eshopItem.productCode}</td>
                  <td className="align-middle">{eshopItem.productName}</td>
                  <td className="align-middle text-center">{eshopItem.volume}</td>
                  <td className="align-middle text-end pe-4">{formatter.format(eshopItem.price)}</td>
                  <td>
                      <Link to={`/item/update/${eshopItem.id}`} type="button" className="btn btn-primary btn-sm mb-1 mx-1">Update</Link>
                      <button className="btn btn-danger btn-sm mb-1 mx-1" onClick={() => deleteItem(eshopItem.id)}>Delete</button>
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

export default ManagementItems;
