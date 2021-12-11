

import { Switch, Route } from "react-router-dom";
import Upload from "./Upload";


const UploadRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
          <Route path={`${url}/`} component={Upload} />
      </Switch>
    )
}

export default UploadRoutes;