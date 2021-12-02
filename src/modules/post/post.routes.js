

import { Switch, Route } from "react-router-dom";
import Post from "./Post";


const PostRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
          <Route path={`${url}/`} component={Post} />
      </Switch>
    )
}

export default PostRoutes;