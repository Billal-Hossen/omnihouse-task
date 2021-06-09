
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import DetailsInfoPage from './components/detailsInfo/DetailsInfoPage';
import Home from './components/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
     
       
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/details/:id">
          <DetailsInfoPage/>
        </Route>
      </Switch>
   
      

     
    </Router>
  );
}

export default App;
