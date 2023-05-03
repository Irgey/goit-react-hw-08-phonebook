import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/Auth/AuthOperations';
import { selectAuthUser, selectIsOnline } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAuthUser);
  const isUserOnline = useSelector(selectIsOnline);
  const handleLogOut = () => {
    console.log('logout click');
    dispatch(logOutThunk());
  };
  return isUserOnline ? (
    <div>
      <p>Hello, {name}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  ) : (
    <div>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};
