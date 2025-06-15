import ManagementItems from '../../components/ManagementItems';
import ItemService from '../../components/service/ItemService';
import useFetch from '../../hooks/useFetch';

const ItemManagement = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {data: eshopItems, isPending, error, refetch} = useFetch(BASE_URL + '/eshop/items');

  const deleteItem = async (deletedItemId) => {
    try {
      await ItemService.deleteItem(deletedItemId);
      refetch();
    } catch (err) {
      console.error('Error delete item:', err);
    }
  };

  return (
    <div className='Home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!error && !isPending && <ManagementItems eshopItems={eshopItems} deleteItem={deleteItem} />}
    </div>
  );
}

export default ItemManagement;
