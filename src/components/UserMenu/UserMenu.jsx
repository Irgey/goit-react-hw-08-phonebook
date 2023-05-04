import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { StyledNavLink } from 'Global.styled';
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
    <StyledDiv>
      <p>Hello, {name}</p>
      <Button variant="contained" onClick={handleLogOut}>
        Logout
      </Button>
    </StyledDiv>
  ) : (
    <StyledDiv>
      <StyledNavLink to="/login">Log in</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
