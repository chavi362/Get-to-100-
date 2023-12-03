import React, { useState, useEffect } from 'react';
//when a winner render thus
function TopPlayers() {
    const players = JSON.parse(localStorage.getItem('players')) || [];
    const playersWithAverage = players.map(player => ({
      ...player,
      averageScore: player.AllScores.reduce((sumPrevScores, score) => sumPrevScores + score, 0) / player.AllScores.length,
    }));
    const sortedPlayers = playersWithAverage.sort((a, b) => a.averageScore - b.averageScore);
    const topThreePlayers = sortedPlayers.slice(0, 3);
  return (
    <div>
      <h2>Top Players</h2>
      <ul>
        {topThreePlayers.map(player => (
          <li key={player.email}>
            {player.userName } - Average Score: {player.averageScore.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopPlayers;
