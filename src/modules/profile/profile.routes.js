

import { Switch, Route } from "react-router-dom";
import Profile from "./Profile/Profile";


const ProfileRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
          <Route path={`${url}/`} component={Profile} />
      </Switch>
    )
}

export default ProfileRoutes;