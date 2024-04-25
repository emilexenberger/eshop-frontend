import CheckoutItems from '../../components/CheckoutItems';
import useFetch from '../../hooks/useFetch';
import UserProfile from '../User/UserProfile';

const CartCheckout = () => {
  const {data: cartItems, isPending, error} = useFetch('http://localhost:8080/cart/');

  return (
    <div className='Cart'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!error && !isPending &&
        <>
          <UserProfile />
          <CheckoutItems cartItems={cartItems} />
        </>
      }
    </div>
  );
}

export default CartCheckout;
