import React, { useState, useEffect } from 'react';

const EshopItems = () => {
  const [eshopItems, setEshopItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/eshop/items')
        .then(res => res.json())
        .then(data => setEshopItems(data))
  }, []);

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
              eshopItems.map(eshopItem => (
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
