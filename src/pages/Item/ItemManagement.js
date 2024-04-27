import ManagementItems from '../../components/ManagementItems';
import ItemService from '../../components/service/ItemService';
import useFetch from '../../hooks/useFetch';

const ItemManagement = () => {
  const {data: eshopItems, isPending, error, refetch} = useFetch('http://localhost:8080/eshop/items');

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
