import { Fragment } from 'react';
import { HomePage } from '../pages';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
    private: false,
  },
];

const Routes = () => {
  return (
    <Fragment>
      {routes.map((route, index) => {
        if (route.private) {
          //TODO: check if user is logged in
          return null;
        } else {
          return <route.component key={index} {...route} />;
        }
      })}
    </Fragment>
  );
};

export default Routes;
