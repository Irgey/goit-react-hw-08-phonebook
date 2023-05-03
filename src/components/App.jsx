// Libs
import { Routes, Route } from 'react-router-dom';

// Pages,Components
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/Auth/AuthOperations';
import { selectAuthIsLoading } from 'redux/selectors';
import { Oval } from 'react-loader-spinner';
import { PrivateRoute } from 'HOC/PrivateRoute';
export const App = () => {
  const dispatch = useDispatch();
  const authIsLoading = useSelector(selectAuthIsLoading);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return authIsLoading ? (
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
    <div
      style={{
        paddingLeft: '15px',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
