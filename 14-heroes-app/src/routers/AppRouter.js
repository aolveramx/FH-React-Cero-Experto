import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import DashBoardRouter from './DashBoardRouter';
import LoginScreen from '../login/LoginScreen';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={ LoginScreen } />
          <Route path="/" component={ DashBoardRouter } />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
