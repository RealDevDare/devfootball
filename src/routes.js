import React from 'react';
import Layout from './HOC/Layout';
import {Switch} from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import Home from './Components/home';
import SignIn from './Components/signin';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/ui/not_found';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import AdminPlayers from './Components/admin/players';
import AddEditPlayer from './Components/admin/players/addEditPlayer';



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
          path="/admin_matches/edit_match"
          exact 
          component={AddEditMatch}
        />
        <PrivateRoute 
          {...props} 
          path="/admin_matches/edit_match/:id"
          exact 
          component={AddEditMatch}
        />
        <PrivateRoute 
          {...props} 
          path="/admin_players" 
          exact 
          component={AdminPlayers}
        />
        <PrivateRoute 
          {...props} 
          path="/admin_players/add_player" 
          exact 
          component={AddEditPlayer}
        />
        <PrivateRoute 
          {...props} 
          path="/admin_players/add_player/:id" 
          exact 
          component={AddEditPlayer}
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
          component={TheTeam}
          path="/the_team" 
        />

        <PublicRoute 
          {...props} 
          exact
          restricted={false}
          component={TheMatches}
          path="/the_matches" 
        />

        <PublicRoute 
          {...props} 
          exact
          restricted={false}
          component={Home}
          path="/" 
        />

        <PublicRoute 
          {...props} 
          restricted={false}
          component={NotFound}
          path="/" 
        />

      </Switch>
    </Layout>
  );
}

export default Routes;
