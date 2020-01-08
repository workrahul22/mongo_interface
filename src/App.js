import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import index from "./components/pages/index"

function App() {
  return (

      <Router>
      <Switch>
        
          <Route exact path="/" component={index}/>
          </Switch>
        </Router>
   
  );
}

export default App;
