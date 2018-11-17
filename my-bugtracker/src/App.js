import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import TaskList from './containers/TaskList/TaskList';
import Auth from './containers/Auth/Auth';
import Settings from './containers/Settings/Settings';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/tasklist" component={TaskList} />
            <Route path= "/Auth" component={Auth} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
