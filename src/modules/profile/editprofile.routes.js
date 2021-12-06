
import { Switch, Route } from "react-router-dom";
import EditProfile from "./EditProfile";


const EditProfileRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
          <Route path={`${url}/`} component={EditProfile} />
      </Switch>
    )
}

export default EditProfileRoutes;