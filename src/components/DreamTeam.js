import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Players from './Players';
import Grid from '@material-ui/core/Grid';


function DreamTeam(props) {
  const [players, setPlayers] = useState([])

  useEffect(async () => {
    const playersArr = await axios.get('/players')
    setPlayers(playersArr.data)

  }, [])

  const deletePlayerFromDreamTeam = async function (id) {
    let newPlayers = [...players]
    newPlayers.splice(newPlayers.findIndex(d => d._id === id), 1)
    setPlayers(newPlayers);
    await axios.delete(`/player/${id}`);

  }

  const showStats = function (playerName) {
    props.showStats(playerName);
  }

  return (
    <>
    <div className="dreamTeam">DREAM TEAM</div>
      <Grid container direction="row" justify="space-evenly" spacing={3}>
        {
          players.map(p => (
            <Grid item key={p._id}>
              <Players showStats={showStats} player={p} key={p._id} deletePlayerFromDreamTeam={deletePlayerFromDreamTeam} />

            </Grid>
          ))
        }
      </Grid>
    </>


  );
}

export default DreamTeam;