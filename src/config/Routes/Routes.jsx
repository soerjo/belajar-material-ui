import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register, Login, Dasboard } from "../../pages";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Dasboard} />
      </Switch>
    </Router>
  );
}

export default Routes;
