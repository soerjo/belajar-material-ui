import {
  Typography,
  TextField,
  Grid,
  Container,
  Paper,
  Button,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "2rem 1.3rem",
    textAlign: "center",
  },
  title: {
    marginBottom: ".3rem",
  },
  btn: {
    margin: "1.5rem 0",
    padding: ".7rem",
  },
}));

function FormRegister() {
  const classes = useStyles();
  const [state, setstate] = useState({
    email: "",
    name: "",
    password: "",
    checkPassword: "",
  });
  const [isLoading, setisLoading] = useState(false);
  console.log(state);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setstate({ ...state, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setstate({
      email: "",
      name: "",
      password: "",
      checkPassword: "",
    });
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  };

  return (
    <Container maxWidth="xs" style={{ padding: 0 }}>
      <Paper className={classes.paper} elevation={3}>
        <Typography
          variant="h5"
          className={classes.title}
          color="primary"
          fontWeight="fontWeightBold"
        >
          Form Registrasi
        </Typography>
        <form>
          <TextField
            id="email"
            label="Email"
            placeholder="input your email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={state.email}
            onChange={handleChange}
          />
          <TextField
            id="name"
            label="Name"
            placeholder="input your name"
            fullWidth
            margin="normal"
            variant="outlined"
            value={state.name}
            onChange={handleChange}
          />
          <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                id="password"
                label="Password"
                placeholder="input your password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={state.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="checkPassword"
                label="Check Password"
                placeholder="reenter your password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={state.checkPassword}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
            className={classes.btn}
            onClick={handleSubmit}
          >
            {isLoading ? "Loading..." : "Register"}
          </Button>
          <Link
            variant="body2"
            component={RouterLink}
            to="/login"
            color="textSecondary"
          >
            Already have an account? Login
          </Link>
        </form>
      </Paper>
    </Container>
  );
}

export default FormRegister;
