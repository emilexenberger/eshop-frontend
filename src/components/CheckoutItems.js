import { useNavigate } from 'react-router-dom';
import OrderService from './service/OrderService';

const CheckoutItems = ({ cartItems }) => {
  const navigate = useNavigate();

  let totalPrice = 0;
  cartItems.forEach(cartItem => {
    totalPrice += (cartItem.item.price * cartItem.volume)
  })

  const handlePressedPlaceOrder = () => {
    OrderService.placeOrder();
    navigate('/order/placed')
  };

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <h1 className='text-center'>Cart</h1>

      <div className='d-flex justify-content-center'>
        <div className='col-md-9'>
          <table className="table">
            <thead>
              <tr>
                <th className="align-middle text-center">Product code</th>
                <th className="align-middle text-center">Product name</th>
                <th className="align-middle text-center">Volume</th>
                <th className="align-middle text-center">Unit price</th>
                <th className="align-middle text-center">Total price</th>
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
                    </tr>
                  )
                ))
              }
              
              <tr className="bg-transparent border-0">
                <td colSpan="3" className="text-end align-middle fw-bold border-0">Total Price:</td>
                <td className="align-middle fw-bold text-end pe-4 border-0">{formatter.format(totalPrice)}</td>
                <td className='border-0'>
                  <button onClick={handlePressedPlaceOrder} className="btn btn-success btn-sm">
                    Place Order
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
