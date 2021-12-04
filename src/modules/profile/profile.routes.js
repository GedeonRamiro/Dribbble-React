

import { Switch, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import { ContextProfileStateProvider } from './context/ContextProfile'


const ProfileRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
        <ContextProfileStateProvider>
          <Route path={`${url}/`} component={Profile} />
        </ContextProfileStateProvider>
      </Switch>
    )
}

export default ProfileRoutes;