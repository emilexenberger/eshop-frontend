import CartItems from '../../components/CartItems';
import CartService from '../../components/service/CartService';
import useFetch from '../../hooks/useFetch';

const Cart = () => {
  const {data: cartItems, isPending, error, refetch} = useFetch('http://localhost:8080/cart/');

  const isCartEmpty = cartItems && cartItems.length === 0;

  const handleVolumeChange = async (editedCartItem) => {
    try {
      await CartService.editCart(editedCartItem);
      refetch();
    } catch (err) {
      console.error('Error edit cart item:', err);
    }
  };

  return (
    <div className='Cart'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!error && !isPending && !isCartEmpty && (
        <CartItems cartItems={cartItems} handleVolumeChange={handleVolumeChange} />
      )}
      {!error && !isPending && isCartEmpty && <h2 className='text-center'>Cart is empty</h2>}
    </div>
  );
}

export default Cart;
