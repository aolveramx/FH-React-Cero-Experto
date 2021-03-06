import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import NavBar from "./NavBar";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">          
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/about" component={AboutScreen}/>
          <Route exact path="/login" component={LoginScreen}/>
          <Redirect to="/"/>
        </Switch>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
