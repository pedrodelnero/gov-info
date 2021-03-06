import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { Header, HomePage, Members, MemberPage, Bills, BillPage, Committees, CommitteePage } from '../components';
import theme from './theme';
import './app.css';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div className='app-body'>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/members/:chamber" component={Members} />
            <Route path="/member/:id" component={MemberPage} />
            <Route path="/bills/:congress/" component={Bills} />
            <Route path="/bill/:congress/:billId" component={BillPage} />
            <Route path="/committees/:chamber" component={Committees} />
            <Route path="/committee/:congress/:chamber/:committeeId" component={CommitteePage} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;