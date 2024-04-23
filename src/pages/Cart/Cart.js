import CartItems from '../../components/CartItems';
import CartService from '../../components/service/CartService';
import useFetch from '../../hooks/useFetch';

const Cart = () => {
  const {data: cartItems, isPending, error, refetch} = useFetch('http://localhost:8080/cart/');

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
      {!error && !isPending && <CartItems cartItems={cartItems} handleVolumeChange={handleVolumeChange} />}
    </div>
  );
}

export default Cart;
