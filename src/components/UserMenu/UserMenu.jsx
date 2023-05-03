import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/Auth/AuthOperations';
import { selectAuthUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAuthUser);
  const handleLogOut = () => {
    console.log('logout click');
    dispatch(logOutThunk());
  };
  return (
    <div>
      <p>Hello, {name}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
