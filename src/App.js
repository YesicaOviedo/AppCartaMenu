import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/Home';
import Ingresar from './components/Ingresar';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact render={props=>(<Ingresar {...props}/>)}/>
          <Route path="/Home" exact render={props=>(<Home {...props}/>)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
