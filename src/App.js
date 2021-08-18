import { useMediaQuery, useTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./componets/Navbar";
import MyDrawer from "./MyDrawer";
import DailyRoutine from "./pages/DailyRoutine";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SelfImprovement from "./pages/SelfImprovement";

function App() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        {isSmall ? <></> : <MyDrawer></MyDrawer>}
        <div style={{ width: "100%" }}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <DailyRoutine />
            </Route>
            <Route exact path="/selfimprovement">
              <SelfImprovement />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
