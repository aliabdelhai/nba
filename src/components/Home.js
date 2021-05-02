import { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Players from './Players';
import Grid from '@material-ui/core/Grid';

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),

        },
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    btn: {
        marginTop: 17
    }

}));


function Home(props) {
    const [team, setTeam] = useState([])
    const [teamName, setTeamName] = useState('')
    const handleInput = function (e) {
        setTeamName(e.target.value)
    }

    const search = async function () {
        const team = await axios.get('http://data.nba.net/10s/prod/v1/2018/players.json')
        const filterTeam = team.data.league.standard.filter(t => t.teamId == teamToIDs[teamName])
        const finalData = filterTeam.map(fd => { return ({ 'firstName': fd.firstName, 'lastName': fd.lastName, 'jersey': fd.jersey, 'pos': fd.pos, 'img': `https://nba-players.herokuapp.com/players/${fd.lastName}/${fd.firstName}` }) })
        setTeam(finalData);
        console.log(finalData)
    }

    const showStats = function (playerName) {
        props.showStats(playerName);
    }


    const classes = useStyles();
    return (

        <div className={classes.root} >
            <center>
                <TextField
                    label="Player Name"
                    id="outlined-size-small"
                    defaultValue=""
                    variant="outlined"
                    size="small"
                    value={teamName}
                    onChange={handleInput}
                />
                <Button className={classes.btn} variant="contained" color="primary" onClick={search}>
                    SEARCH
                </Button>
            </center>

            <>
                <Grid container direction="row" justify="space-evenly" spacing={3}>
                    {
                        team.map(p => (
                            <Grid item key={p._id}>
                                <Players showStats={showStats} player={p} key={p._id} />
                            </Grid>
                        ))
                    }
                </Grid>
            </>
        </div>
    );
}

export default Home;