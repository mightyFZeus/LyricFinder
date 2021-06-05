import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Index from "./Components/Layout/Index";
import Lyrics from "./Components/Tracks/Lyrics";
import { GlobalProvider } from "./context";
export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route  path="/lyrics" component={Lyrics} />
            </Switch>
          </div>
        </>
      </Router>
    </GlobalProvider>
  );
}
