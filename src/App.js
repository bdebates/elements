import "./App.css";
import PeriodicTable from "./components/Periodic/PeriodicTable";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <>
      <Router>
        <nav className="menu">
          {/* <NavLink
            className="text-center link"
            activeClassName="active-link"
            // activeClassName="active"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            // activeClassName="active"
            to="/search"
          >
            Search
          </NavLink> */}
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            // activeClassName="active"
            to="/periodic-table"
          >
            Periodic Table
          </NavLink>
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            to="/search"
          >
            Search for Elements
          </NavLink>
        </nav>
        <main>
          <Switch>
            {/* <Route path="/login" component={LoginPage} /> */}
            <Route path="/search" component={SearchPage} />
            {/* <Route path="/favorites" component={FavoritesPage} /> */}
            <Route path="/periodic-table" component={PeriodicTable} />
            <Route path="*">
              <Redirect to="/periodic-table"></Redirect>
            </Route>
          </Switch>
        </main>
        <footer>This is a footer</footer>
      </Router>
      {/* <Periodic></Periodic> */}
    </>
  );
}

export default App;
