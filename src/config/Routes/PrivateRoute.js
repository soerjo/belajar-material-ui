import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useSelector((state) => state.auth);
  console.log("masuk: ", user.email);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.email ? <Component {...props} /> : <Redirect to="/login" />
      }
    ></Route>
  );
}

export default PrivateRoute;
