import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLogedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const loginHandler = () => {
    setIsLogedIn(true);
  };

  const logoutHandler = () => {
    setIsLogedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogedIn,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
