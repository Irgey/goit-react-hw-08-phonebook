import { useSelector } from 'react-redux';
import { ContactElement } from 'components';
import PropTypes from 'prop-types';
import { selectContacts } from 'redux/selectors';
import { Oval } from 'react-loader-spinner';

const ContactList = ({ contacts }) => {
  const { isLoading } = useSelector(selectContacts);

  return (
    <>
      {' '}
      {isLoading ? (
        <Oval
          height={80}
          width={80}
          color="#065893"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#0f5cc7"
          strokeWidth={8}
          strokeWidthSecondary={8}
        />
      ) : (
        <ul>
          {contacts.map(({ name, number, id }) => (
            <ContactElement name={name} number={number} key={id} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
};
