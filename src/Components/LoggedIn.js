import React from 'react';
import { useAppContext } from '../libs/contextLib';
import Form from './Form';

const LoggedIn = ({ app }) => {
  const { setIsAuthenticated } = useAppContext();

  async function handleLogout() {
    await app.currentUser.logOut();
    setIsAuthenticated(false);
  }

  return (
    <>
      <p>Successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
      <Form app={app} />
    </>
  );
};

export default LoggedIn;
