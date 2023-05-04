import styled from '@emotion/styled';
import { StyledNavLink } from 'Global.styled';
export const NavBar = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;
