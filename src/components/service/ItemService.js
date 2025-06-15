class ItemService {
    static BASE_URL = process.env.REACT_APP_BASE_URL;

    static async saveItem(savedItem) {
        console.log(`Item saved: POST ${ItemService.BASE_URL}/item/save`, savedItem)
        try {
            const token = localStorage.getItem('token');
            await fetch(`${ItemService.BASE_URL}/item/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(savedItem)
            });
        } catch (err) {
            throw err;
        }
    }

    static async deleteItem(deletedItemId) {
        console.log(`Item removed: POST ${ItemService.BASE_URL}/item/delete`, {id: deletedItemId})
        try {
            const token = localStorage.getItem('token');
            await fetch(`${ItemService.BASE_URL}/item/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({id: deletedItemId})
            });
        } catch (err) {
            throw err;
        }
    }

    static async getItemById(itemId) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${ItemService.BASE_URL}/item/details/${itemId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            return data;
        } catch (err) {
            throw err;
        }
    }

}

export default ItemService;