import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./NavBar";
import About from "./About"; 

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
