import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>CALEDONIAmovies</h1>
        </Link>

        <Link to="/">Home</Link>
        <br />
        <Link to="/movies">movie</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/">ERROR 404 - PAGE NO FOUND</Route>
        </Switch>
      </main>
    </Router>
  );
}
