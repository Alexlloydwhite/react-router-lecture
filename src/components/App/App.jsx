import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetail from '../AnimalDetail/AnimalDetail';

function App() {
  return (
    <div className="App">
      <h1>SPAs!</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
          </ul>
        </nav>
        <Route
          path="/"
          exact
        >
          <Home />
        </Route>
        <Route
          path="/animals"
          exact
        >
          <Animals />
        </Route>
        <Route path="/animals/:id">
          <AnimalDetail />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
      </Router>
    </div>
  );
}

export default App;
