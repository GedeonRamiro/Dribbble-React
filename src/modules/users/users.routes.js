

import { Switch, Route } from "react-router-dom";
import Users from "./Users";

const UsersRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
          <Route path={`${url}/`} component={Users} />
      </Switch>
    )
}

export default UsersRoutes;