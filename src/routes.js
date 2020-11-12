import React from 'react';
import Layout from './HOC/Layout';
import {Switch} from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import Home from './Components/home';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';

import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';

const Routes = (props) => {

  return (
    <Layout>
      <Switch>
        <PrivateRoute 
          {...props} 
          path="/dashboard" 
          exact 
          component={Dashboard}
        />

        <PrivateRoute 
          {...props} 
          path="/admin_matches" 
          exact 
          component={AdminMatches}
        />

        <PrivateRoute 
          {...props} 
          path="/admin_matches/edit_match/:id"
          exact 
          component={AddEditMatch}
        />

        <PublicRoute 
          {...props} 
          exact
          restricted={true}
          component={SignIn}
          path="/signin/" 
        />

        <PublicRoute 
          {...props} 
          exact
          restricted={false}
          component={Home}
          path="/" 
        />

      </Switch>
    </Layout>
  );
}

export default Routes;
