import React, { useState } from 'react';
import * as Realm from 'realm-web';
import Login from './Components/Login';
import LoggenIn from './Components/LoggedIn';
import { AppContext } from './libs/contextLib';

// if logged in, show text with user and a logout button; if not logged in, show the login component

function App() {
  const id = 'mygigs-xtsjg';
  const config = {
    id,
  };
  const app = new Realm.App(config);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {isAuthenticated ? <LoggenIn app={app} /> : <Login app={app} />}
    </AppContext.Provider>
  );
}

export default App;
