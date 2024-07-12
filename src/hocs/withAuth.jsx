import React from 'react';

const withAuth = Component => {
  const AuthComponent = props => {
    return <Component {...props} />;
  };

  AuthComponent.displayName = `withAuth(${
    Component.displayName || Component.name || 'Component'
  })`;

  return AuthComponent;
};

export default withAuth;
