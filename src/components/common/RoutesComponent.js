import { useAuthContext } from "../../hooks/useContext/AuthContext";
import { Route, Routes } from "react-router-dom";
import Cart from "../../pages/Cart/Cart";
import CartCheckout from "../../pages/Cart/CartCheckout";
import Eshop from "../../pages/Eshop/Eshop";
import Home from "../../pages/Home/Home";
import ItemCreate from "../../pages/Item/ItemCreate";
import ItemManagement from "../../pages/Item/ItemManagement";
import ItemUpdate from "../../pages/Item/ItemUpdate";
import NotFound from "../../pages/NotFound/NotFound";
import OrderDetails from "../../pages/Order/OrderDetails";
import OrderPlaced from "../../pages/Order/OrderPlaced";
import OrderShowAll from "../../pages/Order/OrderShowAll";
import UserCreate from "../../pages/User/UserCreate";
import UserLogin from "../../pages/User/UserLogin";
import UserManagement from "../../pages/User/UserManagement";
import UserProfile from "../../pages/User/UserProfile";
import UserUpdate from "../../pages/User/UserUpdate";
import UserService from "../service/UserService";

export const RoutesComponent = () => {
    const { isAuthenticated } = useAuthContext();

    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/login" element={<UserLogin />} />
        <Route exact path="/user/create" element={<UserCreate />} />

        {isAuthenticated && (
          <>
            <Route exact path="/eshop" element={<Eshop />} />
            <Route exact path="/user/profile" element={<UserProfile />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/cart/checkout" element={<CartCheckout />} />
            <Route exact path="/order/placed" element={<OrderPlaced />} />
            <Route exact path="/order/all" element={<OrderShowAll />} />
            <Route exact path="/order/:orderId" element={<OrderDetails />} />
          </>
        )}

        {UserService.isAdmin() && (
          <>
            <Route exact path="/item/management" element={<ItemManagement />} />
            <Route exact path="/item/create" element={<ItemCreate />} />
            <Route exact path="/user/management" element={<UserManagement />} />
            <Route exact path="/user/update/:userId" element={<UserUpdate />} />
            <Route exact path="/item/update/:itemId" element={<ItemUpdate />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}

export default RoutesComponent;
