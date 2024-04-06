import EshopItems from '../../components/EshopItems';
import useFetch from '../../hooks/useFetch';

const Eshop = () => {
  const {data: eshopItems, isPending, error} = useFetch('http://localhost:8080/eshop/items');

  return (
    <div className='Home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!error && !isPending && <EshopItems eshopItems={eshopItems} />}
    </div>
  );
}

export default Eshop;
