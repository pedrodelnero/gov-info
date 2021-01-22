import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, HomePage, Members, MemberPage, BillPage, Committees, CommitteePage } from './components';


const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/members" component={Members} />
        <Route path="/member/:id" component={MemberPage} />
        <Route path="/bill/:congress/:billId" component={BillPage} />
        <Route path="/committees" component={Committees} />
        <Route path="/committee/:congress/:chamber/:committeeId" component={CommitteePage} />
      </Switch>
    </Router>
  );
}

export default App;