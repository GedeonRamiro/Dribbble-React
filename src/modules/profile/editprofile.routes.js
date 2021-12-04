

import { Switch, Route } from "react-router-dom";
import EditProfile from "./EditProfile";
import { ContextProfileStateProvider } from './context/ContextProfile'


const EditProfileRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
        <ContextProfileStateProvider>
          <Route path={`${url}/`} component={EditProfile} />
        </ContextProfileStateProvider>
      </Switch>
    )
}

export default EditProfileRoutes;