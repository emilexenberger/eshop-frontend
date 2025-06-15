import EshopItems from '../../components/EshopItems';
import CartService from '../../components/service/CartService';
import useFetch from '../../hooks/useFetch';

const Eshop = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {data: eshopItems, isPending, error, refetch} = useFetch(BASE_URL + '/eshop/items');

  const handleAddToCart = async (itemAddedToCart) => {
    try {
      await CartService.addToCart(itemAddedToCart);
      refetch();
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  return (
    <div className='Home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!error && !isPending && <EshopItems eshopItems={eshopItems} handleAddToCart={handleAddToCart} />}
    </div>
  );
}

export default Eshop;
