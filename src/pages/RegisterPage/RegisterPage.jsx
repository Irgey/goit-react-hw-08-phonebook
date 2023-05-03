import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/Auth/AuthOperations';
import { selectAuthIsLoading } from 'redux/selectors';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const authIsLoading = useSelector(selectAuthIsLoading);
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log(email, password);
    dispatch(registerThunk({ name, email, password }));
  };
  return (
    <>
      {' '}
      {authIsLoading ? (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={8}
          strokeWidthSecondary={8}
        />
      ) : (
        <>
          <h1>Registration form</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" autoComplete="name" required />
            </label>

            <label>
              E-mail:
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="new-password"
                required
                minLength={7}
              />
            </label>
            <button>Submit</button>
          </form>
        </>
      )}
    </>
  );
};
