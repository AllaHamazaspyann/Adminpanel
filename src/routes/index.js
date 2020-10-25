import React from 'react';
import { 
  Route, 
  Switch, 
  withRouter
} from 'react-router-dom';
import Users from '../Pages/Users';
import Edit from '../Pages/Edit';





const Routes = () => (
  <Switch>
    <Route path='/editUser' component={ Edit }/>
    <Route path='/' component={ Users }/>
  </Switch>
)

export default withRouter(Routes);