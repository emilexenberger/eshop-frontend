import React from 'react';

const EshopItems = ({ items }) => {
  return (
    <div>
      <h1 className='text-center'>EshopItems</h1>
      <div className='row'>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Product code</th>
              <th>Product name</th>
              <th>Volume</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(eshopItem => (
                <tr key={eshopItem.id}>
                  <td>{eshopItem.productCode}</td>
                  <td>{eshopItem.productName}</td>
                  <td>{eshopItem.volume}</td>
                  <td>{eshopItem.price}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EshopItems;
