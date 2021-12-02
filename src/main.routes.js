
import { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LazyLoading from './_common/components/LazyLoading'
import { Toaster } from 'react-hot-toast';
import { GlobalStateProvider } from 'context/GlobalContext'
import ProtectedRouter from '_common/components/ProtectedRouter'
import MainLayout from "_common/layouts/MainLayout/MainLayout";


const LoginRoutes = lazy(() => import('./modules/account/login/login.routes'))
const CreateAccountRoutes = lazy(() =>  import('./modules/account/create-account/createAccount.routes'))
const HomeRoutes = lazy(() =>  import('./modules/home/home.routes'))
const PostRoutes = lazy(() =>  import('./modules/post/post.routes'))
const ProfileRoutes = lazy(() =>  import('./modules/profile/profile.routes'))
const UploadRoutes = lazy(() =>  import('./modules/upload/upload.routes'))


const MainRoutes = () => {
    return (
            <GlobalStateProvider>
                <Toaster />
                <Switch>     
                    <Route path="/login" component={LazyLoading(LoginRoutes)} />
                    <Route path="/create-account" component={LazyLoading(CreateAccountRoutes)} />
                    <ProtectedRouter>
                        <MainLayout>
                        <Switch>  
                            <Route exact path="/" component={LazyLoading(HomeRoutes)} />
                            <Route path="/post/:id" component={LazyLoading(PostRoutes)} />
                            <Route path="/profile" component={LazyLoading(ProfileRoutes)} />
                            <Route path="/profile/:id" component={LazyLoading(ProfileRoutes)} />
                            <Route path="/upload" component={LazyLoading(UploadRoutes)} />
                            <Redirect to='/' />
                            </Switch> 
                        </MainLayout>
                    </ProtectedRouter>
                    
                </Switch> 
            </GlobalStateProvider>
    )
}

export default MainRoutes;