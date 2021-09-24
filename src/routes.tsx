import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { GlobalStyle } from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider"

  const Routes: React.FC = () => {
       return (
        <Router>
            <GlobalStyle />
                <ThemeProvider> 
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route  path='/create-account'>
                            <CreateAccount />
                        </Route>
                    </Switch>
                </ThemeProvider>
        </Router>
       
           
       )
  }

  export default Routes