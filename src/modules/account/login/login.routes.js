import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/";


const LoginRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
          <Route path={`${url}/`} component={Login} />
      </Switch>
    )
}

export default LoginRoutes;