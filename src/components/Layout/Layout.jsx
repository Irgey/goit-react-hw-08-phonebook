import styled from '@emotion/styled';
import { NavBar } from 'components/NavBar/NavBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      {' '}
      <StyledHeader>
        <NavBar />
        <UserMenu />
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};
const StyledHeader = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b3d7d7;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;
