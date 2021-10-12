import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import DashBoardRouter from './DashBoardRouter';
import LoginScreen from '../components/login/LoginScreen';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {

  const { user } = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            exact path="/login" 
            component={ LoginScreen }
            isAuthenticated={user.logged}  
          />
          <PrivateRoute 
            path="/" 
            component={ DashBoardRouter }
            isAuthenticated={user.logged} 
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
