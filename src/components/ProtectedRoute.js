import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function ProtectedRoute({ isLogin, path, ...props }) {
  return isLogin ? (
    <Route path={path} {...props} />
  ) : (
    <Redirect to="/sign-in" />
  );
}
