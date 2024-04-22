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

  return (
    <div>
      <h1 className='text-center'>Eshop Items</h1>
      <div className='row'>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Product code</th>
              <th>Product name</th>
              <th>Volume</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              eshopItems.map(eshopItem => (
                eshopItem.volume > 0 &&
                <tr key={eshopItem.id}>
                  <td className="align-middle">{eshopItem.productCode}</td>
                  <td className="align-middle">{eshopItem.productName}</td>
                  <td className="align-middle">{eshopItem.volume}</td>
                  <td className="align-middle">{eshopItem.price}</td>
                  <td className="align-middle">
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
