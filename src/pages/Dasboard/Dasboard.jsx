import React from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { actionLogout } from "../../config/redux/actions/authAction";

export const Dasboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actionLogout());
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Typography
          style={{
            margin: "2rem 0",
          }}
          variant="h5"
        >
          Dasboard {user.email}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          LogOut
        </Button>
      </Paper>
    </div>
  );
};

export default Dasboard;
