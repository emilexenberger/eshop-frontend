import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartItems = ({ cartItems, handleVolumeChange }) => {
  const [volumeSelected, setVolumeSelected] = useState(null);

  let totalPrice = 0;
  cartItems.forEach(cartItem => {
    totalPrice += (cartItem.item.price * cartItem.volume)
  })

  const handlePressedVolumeChange = (e, cartItem, operation) => {
    e.preventDefault();

    let volume;

    if (operation === 'change') {
        volume = volumeSelected == null ? cartItem.volume : volumeSelected;
    } else if (operation === 'remove') {
        volume = 0;
    }
    
    const editedCartItem = {
        itemId: cartItem.item.id,
        volume: volume,
    };
    handleVolumeChange(editedCartItem);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <h1 className='text-center'>Cart</h1>
      <div className=''>
        <table className="table">
          <thead>
            <tr>
              <th className="align-middle text-center">Product code</th>
              <th className="align-middle text-center">Product name</th>
              <th className="align-middle text-center">Volume</th>
              <th className="align-middle text-center">Unit price</th>
              <th className="align-middle text-center">Total price</th>
              <th className="align-middle text-left ps-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map(cartItem => (
                cartItem.volume > 0 && (
                  <tr key={cartItem.id}>
                    <td className="align-middle text-center">{cartItem.item.productCode}</td>
                    <td className="align-middle">{cartItem.item.productName}</td>
                    <td className="align-middle text-center">{cartItem.volume}</td>
                    <td className="align-middle text-end pe-4">{formatter.format(cartItem.item.price)}</td>
                    <td className="align-middle text-end pe-4">{formatter.format(cartItem.item.price * cartItem.volume)}</td>
                    <td className="align-middle">
                      <div className='d-flex'>
                        <input 
                          name="volumeSelected" 
                          type="number" 
                          min="1" 
                          step="1" 
                          defaultValue={cartItem.volume} 
                          max={cartItem.volume + cartItem.item.volume} 
                          onChange={(e) => setVolumeSelected(e.target.value)}
                          className="form-control w-25 me-2" 
                        />
                        
                        <button onClick={(e) => handlePressedVolumeChange(e, cartItem, "change")} className="btn btn-primary btn-sm me-2">
                          Change volume
                        </button>

                        <button onClick={(e) => handlePressedVolumeChange(e, cartItem, "remove")} className="btn btn-danger btn-sm">
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              ))
            }
            
            <tr className="bg-transparent border-0">
              <td colSpan="4" className="text-end align-middle fw-bold border-0">Total Price:</td>
              <td className="align-middle fw-bold text-end pe-4 border-0">{formatter.format(totalPrice)}</td>
              <td className='border-0 green'>
                <Link to="/cart/checkout" type="button" className="btn btn-success btn-sm mb-1 mx-1">Checkout</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
