import styled from '@emotion/styled';
import { StyledNavLink } from 'Global.styled';
import { useSelector } from 'react-redux';
import { selectIsOnline } from 'redux/selectors';
export const NavBar = () => {
  const isOnline = useSelector(selectIsOnline);
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isOnline && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;
