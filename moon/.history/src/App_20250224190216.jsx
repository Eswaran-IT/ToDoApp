import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar"; // Assuming Navbar component is ready
import About from "./About"; // Assuming About section as a separate component
import LandingPage from "./LandingPage"; // Landing page component

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
