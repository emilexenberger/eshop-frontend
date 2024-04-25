import OrderItems from '../../components/OrderItems';
import useFetch from '../../hooks/useFetch';

const OrderShowAll = () => {
  const {data: orderItems, isPending, error} = useFetch('http://localhost:8080/order/show-all');

  return (
    <div className='Orders'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!error && !isPending && <OrderItems orderItems={orderItems} />}
    </div>
  );
}

export default OrderShowAll;
