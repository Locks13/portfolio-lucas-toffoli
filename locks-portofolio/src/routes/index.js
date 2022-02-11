import { Switch } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Route from "./Route"
import User from "../pages/User";
import AboutMe from "../pages/AboutMe";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/lucas-toffoli" component={AboutMe} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/user" component={User} isPrivate />
            <Route path="*" component={AboutMe} />
        </Switch>
    )
}