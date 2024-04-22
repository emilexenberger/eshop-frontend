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

    // static async getCart() {
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = await fetch(`${CartService.BASE_URL}/cart/`, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         const data = await response.json();
    //         return data;
    //     } catch (err) {
    //         throw err;
    //     }
    // }


}

export default CartService;