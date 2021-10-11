import { Redirect, Route, Switch } from "react-router"

import DcScreen from "../components/dc/DcScreen"
import HeroScreen from "../heroes/HeroScreen"
import MarvelScreen from "../components/marvel/MarvelScreen"
import { Navbar } from "../components/ui/Navbar"
import SearchScreen from "../components/search/SearchScreen"

const DashBoardRouter = () => {

  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/hero/:heroId" component={ HeroScreen } />
          <Route exact path="/dc" component={ DcScreen } />
          <Route exact path="/search" component={ SearchScreen } />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

export default DashBoardRouter
