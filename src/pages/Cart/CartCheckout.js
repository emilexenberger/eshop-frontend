import CheckoutItems from '../../components/CheckoutItems';
import useFetch from '../../hooks/useFetch';
import UserProfile from '../User/UserProfile';

const CartCheckout = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {data: cartItems, isPending, error} = useFetch(BASE_URL + '/cart/');

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
