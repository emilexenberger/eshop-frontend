import React from 'react';

const EshopItems = ({ eshopItems, handleAddToCart }) => {

  const handleSubmit = (e, eshopItem) => {
    e.preventDefault();
    const itemAddedToCart = {
      itemId: eshopItem.id,
      volume: e.target.elements.volumeSelected.value,
    };
    handleAddToCart(itemAddedToCart);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <h1 className='text-center'>Eshop Items</h1>
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
                  <td className="align-middle text-center">
                  <form onSubmit={(e) => handleSubmit(e, eshopItem)} className="d-flex align-items-center">
                    <input 
                      name="volumeSelected" 
                      type="number" 
                      min="1" 
                      step="1" 
                      defaultValue="1" 
                      max={eshopItem.volume} 
                      className="form-control w-25 me-2"
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary btn-s">
                        Add to cart
                      </button>
                    </div>
                  </form>
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

export default EshopItems;
