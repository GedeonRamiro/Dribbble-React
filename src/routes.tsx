import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { GlobalStyle } from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider"
import { GlobalStateProvider } from './context/GlobalContext'
import ProtectedRouter from "./ProtectedRouter/ProtectedRouter";

  const Routes: React.FC = () => {
       return (
        <GlobalStateProvider>
            <Router>
                <GlobalStyle />
                <ToastContainer />
                    <ThemeProvider> 
                        <Switch>
                            <ProtectedRouter exact path='/'>
                                <Home />
                            </ProtectedRouter>
                            <Route path='/login'>
                                <Login />
                            </Route>
                            <Route  path='/create-account'>
                                <CreateAccount />
                            </Route>
                        </Switch>
                    </ThemeProvider>  
            </Router>
        </GlobalStateProvider>         
       )
  }

  export default Routes