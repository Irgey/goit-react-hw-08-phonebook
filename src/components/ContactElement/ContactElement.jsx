import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import css from './ContactElement.module.css';
import { selectContacts } from 'redux/selectors';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from '@emotion/styled';
const ContactElement = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectContacts);
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <StyledLi className={css.listItem}>
      <AccountCircleIcon />
      <p>
        {name}: {number}
      </p>
      <StyledButton onClick={handleDelete} disabled={isLoading}>
        <CancelIcon />
      </StyledButton>
    </StyledLi>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  &:hover svg {
    fill: antiquewhite;
  }
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  background-color: #b3d7d7;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  transition: background-color 250ms;
  &:hover {
    background-color: #a2c6c6;
  }
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
