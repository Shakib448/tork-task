import "./App.css";
import DataFetch from "./Components/DataFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataFetchDetails from "./Components/DataFetchDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DataFetch} />
          <Route exact path="/fetch-details/:id" component={DataFetchDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
