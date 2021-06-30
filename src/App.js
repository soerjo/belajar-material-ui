import "./App.css";
import Routes from "./config/Routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/Theme/Theme";

function App() {
  return (
    <div className="rootApp">
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
