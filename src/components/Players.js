import axios from "axios";
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import { Component, useState } from 'react';

import '../styles/player.css'

function Players(props) {

    const addToDreamTeam = async function () {
        const player = props.player;
        await axios.post('/player', { player })

    }
    const deletePlayer = function (id) {
        props.deletePlayerFromDreamTeam(id);
    }

   

    const showStats = async function () {
        const player = props.player.firstName + " " + props.player.lastName
        props.showStats(player);
    }


    const location = useLocation();
    return (
        <div>
            <div className='player'>
                {location.pathname.includes('/dreamteam') ? <div onClick={() => deletePlayer(props.player._id)} className="delete-player">&times;</div> : null}
                <div className='playerName'>{props.player.firstName} {props.player.lastName}</div>
                <Link to="/stats">
                <img onError={(e) => {
                    e.target.src = "https://esports-news.co.uk/wp-content/uploads/2016/09/anonymous-guy-1.jpg"; }}
                    onClick={showStats} src={props.player.img} className='playerImg' />
                </Link>
                <div className='jersey'>{props.player.jersey}</div>
                <div className='pos'>{props.player.pos}</div>
                <center>{location.pathname.includes('/dreamteam') ? null : <button onClick={addToDreamTeam} id="btn">Add to dream team</button>}</center>
            </div>

        </div>

    );
}

export default Players;