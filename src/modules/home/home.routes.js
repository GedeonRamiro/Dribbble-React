
import { Switch, Route } from "react-router-dom";
import Home from "./Home";


const HomeRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
          <Route path={`${url}/`} component={Home} />
      </Switch>
    )
}

export default HomeRoutes;