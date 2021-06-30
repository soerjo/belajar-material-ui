import {
  Typography,
  TextField,
  Container,
  Paper,
  Button,
  Link,
} from "@material-ui/core";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    textAlign: "center",
    padding: "2rem 1rem",
  },
  title: {
    marginBottom: "1rem",
  },
  btn: {
    margin: "1.5rem 0",
    padding: ".8rem",
  },
});

function FormLogin({ isLoading, loginAction }) {
  const classes = useStyles();
  const history = useHistory();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAction(user)
      .then(() => {
        setuser({
          email: "",
          password: "",
        });
        history.push("/");
      })
      .catch((err) => {
        console.log("Login error: ", err);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setuser({
      ...user,
      [id]: value,
    });
  };

  return (
    <Container maxWidth="xs" style={{ padding: 0 }}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" className={classes.title} color="primary">
          Form Login
        </Typography>
        <form>
          <TextField
            id="email"
            label="Email"
            placeholder="input your email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            id="password"
            label="Password"
            placeholder="input your password"
            margin="normal"
            type="password"
            fullWidth
            variant="outlined"
            value={user.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            className={classes.btn}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
          <Link
            variant="body2"
            component={RouterLink}
            to="/register"
            color="textSecondary"
          >
            Don't have an account? Register
          </Link>
        </form>
      </Paper>
    </Container>
  );
}

export default FormLogin;
