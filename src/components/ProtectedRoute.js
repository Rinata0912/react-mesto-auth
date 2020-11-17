import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function ProtectedRoute({ isLogin, path, Component, ...props }) {
  return isLogin ? (
    <Route exact path={path} render={() => <Component {...props} />} />
  ) : (
    <Redirect to="/signin" />
  );
}
