class OrderService {
    static BASE_URL = "http://localhost:8080";

    static async placeOrder() {
        try {
            const token = localStorage.getItem('token');
            await fetch(`${OrderService.BASE_URL}/order/place`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
        } catch (err) {
            throw err;
        }
    }

    // static async placeOrder(editedCartItem) {
    //     console.log(`Item changed in cart: POST ${OrderService.BASE_URL}/cart/edit`, editedCartItem)
    //     try {
    //         const token = localStorage.getItem('token');
    //         await fetch(`${OrderService.BASE_URL}/cart/edit`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             },
    //             body: JSON.stringify(editedCartItem)
    //         });
    //     } catch (err) {
    //         throw err;
    //     }
    // }


}

export default OrderService;