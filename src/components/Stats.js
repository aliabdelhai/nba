import React, { Component, useState } from 'react';

function Stats(props) {


    return (
        <div>
          <center>
            <div className="playername">{props.stats.name}</div>
                <div class='playerStats'>
                    <div class='team_acronym'>team acronym: {props.stats.team_acronym}</div>
                    <div class='team_name'>team name: {props.stats.team_name }</div>
                    <div class='games_played'>games played: { props.stats.games_played }</div>
                    <div class='minutes_per_game'>minutes per game: {props.stats.minutes_per_game }</div>
                    <div class='field_goals_attempted_per_game'>field goals attempted per game: {props.stats.field_goals_attempted_per_game }</div>
                    <div class='field_goals_made_per_game'>field goals made per game: { props.stats.field_goals_made_per_game }</div>
                    <div class='field_goal_percentage'>field goal percentage: {props.stats.field_goal_percentage }</div>
                    <div class='free_throw_percentage'>free throw percentage: { props.stats.free_throw_percentage }</div>
                    <div class='three_point_attempted_per_game'>three point attempted per game: { props.stats.three_point_attempted_per_game }</div>
                    <div class='three_point_made_per_game'>three point made per game: { props.stats.three_point_made_per_game }</div>
                    <div class='three_point_percentage'>three point percentage: { props.stats.three_point_percentage }</div>
                    <div class='points_per_game'> points per game: { props.stats.points_per_game }</div>
                    <div class='offensive_rebounds_per_game'> offensive rebounds per game: {props.stats.offensive_rebounds_per_game }</div>
                    <div class='defensive_rebounds_per_game'>defensive rebounds per game: { props.stats.defensive_rebounds_per_game }</div>
                    <div class='rebounds_per_game'> rebounds per game: { props.stats.rebounds_per_game }</div>
                    <div class='assists_per_game'> assists per game: {props.stats.assists_per_game }</div>
                    <div class='steals_per_game:'> steals per game: {props.stats.steals_per_game }</div>
                    <div class='blocks_per_game:'> blocks per game: { props.stats.blocks_per_game }</div>
                    <div class='turnovers_per_game:'> turnovers per game: { props.stats.turnovers_per_game }</div>
                    <div class='player_efficiency_rating::'> player efficiency rating: { props.stats.player_efficiency_rating }</div>
                </div>


</center>
           
        </div>
    )

}

export default Stats;