import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
};
