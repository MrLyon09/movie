import { MoviesGrid } from "./components/MoviesGrid";
import styles from './App.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function App() {
  return (
    <Router>
      <header>
        {/* <h1 className={styles.title}>Movies FREE</h1> */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/movie">movie</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movie">Movie</Route>
          <Route exact path="/">Home</Route>
          <Route  path="/">ERROR 404 - PAGE NO FOUND</Route>
        </Switch>
      </main>
    </Router>
  );
}
