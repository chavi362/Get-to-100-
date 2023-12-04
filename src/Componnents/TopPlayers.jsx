import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopPlayers() {
  const players = JSON.parse(localStorage.getItem('players')) || [];
  const playersWithAverage = players.map((player) => ({
    ...player,
    averageScore: player.AllScores.reduce((sumPrevScores, score) => sumPrevScores + score, 0) / player.AllScores.length,
  }));
  const sortedPlayers = playersWithAverage.sort((a, b) => a.averageScore - b.averageScore);
  const topThreePlayers = sortedPlayers.slice(0, 3);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h2>Top Players</h2>
        {topThreePlayers.map((player, index) => (
          <div key={player.email} className="card" style={{ width: '300px', height: '290px' }}>
            <img
              className="card-img-top"
              src={`src/images/topPlayer${index + 1}.png`}
              alt={`Top Player ${index + 1}`}
              style={{ maxHeight: '180px', objectFit: 'cover', marginTop: '0' }}
            />
            <div className="card-body">
              <h4 className="card-title" style={{ fontSize: '16px' }}>
                {player.userName}
              </h4>
              <h5 className="card-title" style={{ fontSize: '14px' }}>
                Average Score: {player.averageScore.toFixed(2)}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPlayers;
