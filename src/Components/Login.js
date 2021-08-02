import React, { useState } from 'react';
import { useAppContext } from '../libs/contextLib';
import * as Realm from 'realm-web';

const Login = ({ app }) => {
  const { setIsAuthenticated } = useAppContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function isFilled() {
    if (email.length > 0 && password.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const credentials = Realm.Credentials.emailPassword(email, password);

    try {
      await app.logIn(credentials);
      setIsAuthenticated(true);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <>
      <p>LOGIN</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            autoFocus
            id="email"
            name="email"
            autoComplete="name@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            autoComplete="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        {isFilled() && <button type="submit">Login</button>}
      </form>
    </>
  );
};

export default Login;
