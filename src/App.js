import { setupIonicReact } from "@ionic/react";
import "./theme/variables.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PushDay from "./pages/PushDay";
import LegDay from "./pages/LegDay";
import PullDay from "./pages/PullDay";

setupIonicReact();

function App() {
  return (
    <div
      style={{
        margin: "0 1rem 0 1rem",
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path='/push-day'>
          <PushDay/>
        </Route>
        <Route path='/leg-day'>
          <LegDay/>
        </Route>
        <Route path='/pull-day'>
          <PullDay/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
