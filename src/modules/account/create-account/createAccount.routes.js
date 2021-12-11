
import { Switch, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";


const CreateAccountRoutes = ( {match: { url }} ) => {
    return (
      <Switch>
          <Route path={`${url}/`} component={CreateAccount} />
      </Switch>
    )
}

export default CreateAccountRoutes;