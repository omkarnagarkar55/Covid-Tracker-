import { Route, Switch } from "react-router-dom";
import About from "./About";
import App from "./App";
import Authentication from "./Authentication";
import CovidTracker from "./CovidTracker";
import Error404 from "./Error404";
import Success from "./Success";

const AppRoutes=()=>(
    <App>
        <Switch>
            <Route path="/" component={CovidTracker} exact/>
            <Route path="/addcountry" render={(history)=>(<Authentication history={history}/>)} exact/>
            <Route path="/success" component={Success} />
            <Route path="/about" component={About} exact/>
            <Route component={Error404}/>
        </Switch>
        
    </App>
)

export default AppRoutes;