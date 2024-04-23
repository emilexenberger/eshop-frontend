class CartService {
    static BASE_URL = "http://localhost:8080";

    static async addToCart(itemAddedToCart) {
        console.log(`Item added to cart: POST ${CartService.BASE_URL}/cart/add`, itemAddedToCart)
        try {
            const token = localStorage.getItem('token');
            await fetch(`${CartService.BASE_URL}/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(itemAddedToCart)
            });
        } catch (err) {
            throw err;
        }
    }

    static async editCart(editedCartItem) {
        console.log(`Item changed in cart: POST ${CartService.BASE_URL}/cart/edit`, editedCartItem)
        try {
            const token = localStorage.getItem('token');
            await fetch(`${CartService.BASE_URL}/cart/edit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(editedCartItem)
            });
        } catch (err) {
            throw err;
        }
    }


}

export default CartService;