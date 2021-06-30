import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register, Login, Dasboard } from "../../pages";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dasboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default Routes;
