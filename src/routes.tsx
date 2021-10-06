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
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";



  const Routes: React.FC = () => {
       return (
        <GlobalStateProvider>
            <Router>
                <GlobalStyle />
                <ToastContainer />
                    <ThemeProvider>
                        <Switch>
                            <Route path='/login'>
                                <Login />
                            </Route>
                            <Route  path='/create-account'>
                                <CreateAccount />
                            </Route>
                            <NavBar>    
                                <ProtectedRouter >
                                    <Route exact path='/'>
                                        <Home />
                                    </Route>
                            
                                    <Route path='/post'>
                                        <Post />
                                    </Route>
                            
                                    <Route path='/profile'>
                                        <Profile />
                                    </Route>
                                </ProtectedRouter>
                            </NavBar>
                        </Switch>
                    </ThemeProvider>  
            </Router>
        </GlobalStateProvider>         
       )
  }

  export default Routes