

import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import { UsersStateProvider } from './context/UsersContext'


const UsersRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
        <UsersStateProvider>
          <Route path={`${url}/`} component={Users} />
        </UsersStateProvider>
      </Switch>
    )
}

export default UsersRoutes;