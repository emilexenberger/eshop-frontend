class OrderService {
    static BASE_URL = process.env.REACT_APP_BASE_URL;

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