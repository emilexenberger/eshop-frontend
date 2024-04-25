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

}

export default OrderService;