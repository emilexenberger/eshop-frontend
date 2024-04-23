import UserService from '../../components/service/UserService'
import { Navigate } from 'react-router-dom';

const UserLogout = () => {
  UserService.logout();
  Navigate("/")
  return
}

export default UserLogout