import { Switch } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Cv from "../pages/Cv";
import Route from "./Route"
import User from "../pages/User";
import AboutMe from "../pages/AboutMe";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/lucas-toffoli/" component={AboutMe} />
            <Route exact path="/lucas-toffoli/cv" component={Cv} />
            <Route exact path="/lucas-toffoli/signin" component={SignIn} />
            <Route exact path="/lucas-toffoli/signup" component={SignUp} />
            <Route exact path="/lucas-toffoli/user" component={User} isPrivate />
            <Route path="*" component={AboutMe} />
        </Switch>
    )
}