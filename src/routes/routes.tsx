import { Fragment, useContext } from 'react';
import { Route } from 'react-router';
import { AuthContext } from '../context/auth-context';
import { HomePage, LoginPage, SigninPage, WelcomePage } from '../pages';

const routes = [
  {
    path: '/',
    component: WelcomePage,
    exact: true,
    private: false,
  },
  {
    path: '/auth/login',
    component: LoginPage,
    exact: true,
    private: false,
  },
  {
    path: '/auth/signin',
    component: SigninPage,
    exact: true,
    private: false,
  },
  {
    path: '/home',
    component: HomePage,
    exact: true,
    private: true,
  },
];

const Routes = () => {
  const { isLogedIn } = useContext(AuthContext);

  return (
    <Fragment>
      {routes.map((route, index) => {
        if (route.private && isLogedIn) {
          return <Route key={index} {...route} />;
        } else {
          return <Route key={index} {...route} />;
        }
      })}
    </Fragment>
  );
};

export default Routes;
