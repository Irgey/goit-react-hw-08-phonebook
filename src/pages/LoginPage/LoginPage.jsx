import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/Auth/AuthOperations';
import { selectAuthIsLoading } from 'redux/selectors';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const authIsLoading = useSelector(selectAuthIsLoading);
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log(email, password);
    dispatch(loginThunk({ email, password }));
  };

  return (
    <>
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
          {' '}
          <h1>Login form</h1>
          <form onSubmit={handleSubmit}>
            <label>
              E-mail:
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="current-password"
                required
              />
            </label>
            <button>Log in</button>
          </form>
        </>
      )}
    </>
  );
};
