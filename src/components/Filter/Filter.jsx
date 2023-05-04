import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import Input from '@mui/material/Input';
import styled from '@emotion/styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <StyledFilter
      label="Find contacts by name"
      variant="outlined"
      defaultValue=""
      type="text"
      onChange={handleChange}
    />

    // <label>
    //   Find contacts by name
    //   <input type="text" onChange={handleChange} />
    // </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};

const StyledFilter = styled(TextField)`
  margin-bottom: 15px;
`;
