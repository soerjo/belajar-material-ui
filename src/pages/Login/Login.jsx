import React from "react";
import { FormLogin } from "../../components/";
import { useSelector, useDispatch } from "react-redux";
import { actionLogin } from "../../config/redux/actions/authAction";

export const Login = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginAction = async (user) => {
    const res = await dispatch(actionLogin(user));
    return res;
  };

  return (
    <div className="App">
      <FormLogin isLoading={isLoading} loginAction={loginAction} />
    </div>
  );
};

export default Login;
