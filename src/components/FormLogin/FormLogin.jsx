import {
  Typography,
  TextField,
  Container,
  Paper,
  Button,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
}));

function FormLogin() {
  const classes = useStyles();
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
          />
          <TextField
            id="password"
            label="Password"
            placeholder="input your password"
            margin="normal"
            type="password"
            fullWidth
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.btn}
          >
            Login
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
