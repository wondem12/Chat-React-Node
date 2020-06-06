import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import { userDataContext } from "./context/user-data-context";

const App = () => {
  const { userName, room } = useContext(userDataContext);

  return (
    <Switch>
      <Route path="/" exact component={Join} />
      {userName && room ? <Route path="/chat" component={Chat} /> : null}
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
