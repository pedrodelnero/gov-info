import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, HomePage, Members, MemberPage } from './components';


const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/members" component={Members} />
        <Route path="/member/:id" component={MemberPage} />
      </Switch>
    </Router>
  );
}

export default App;