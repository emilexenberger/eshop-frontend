import OrderItems from '../../components/OrderItems';
import useFetch from '../../hooks/useFetch';

const OrderShowAll = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {data: orderItems, isPending, error} = useFetch(BASE_URL + '/order/show-all');

  return (
    <div className='Orders'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!error && !isPending && <OrderItems orderItems={orderItems} />}
    </div>
  );
}

export default OrderShowAll;
