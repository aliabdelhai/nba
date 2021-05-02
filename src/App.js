import './App.css';
import './styles/navbar.css';
import axios from "axios";
import { Component, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DreamTeam from './components/DreamTeam'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Stats from './components/Stats'

function App() {
  const [stats, setStats] = useState([])

  const showStats = async function (playerName) {
    const stats = await axios.get('https://nba-players.herokuapp.com/players-stats/')
    const filterStats = stats.data.filter(f => f.name == playerName)
    console.log(filterStats)
    setStats(filterStats);
  }

  return (
    <Router>
      <NavBar />
      <Route path="/" exact render={() => <Home showStats={showStats} />} />
      <Route path="/dreamteam" exact render={() => <DreamTeam showStats={showStats} />} />
      <Route path="/stats" exact render={() => <Stats stats={stats[0]} />} />

    </Router>

  );
}

export default App;
