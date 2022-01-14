import './App.css';

import Header from "./MyComponents/Header";
import { About } from "./MyComponents/About";
import Middle from "./MyComponents/Middle";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Header title="Fit-N-Fine" />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Middle />       
      </Switch>               
    </Router>
    
  );
}

export default App;
