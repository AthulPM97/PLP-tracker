import { setupIonicReact } from "@ionic/react";
import "./theme/variables.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

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
      </Switch>
    </div>
  );
}

export default App;
