import React, { useState } from 'react';
import PlayerRegistration from './PlayerRegistration';
import TopPlayers from './TopPlayers';
import GameBoard from './GameBoard';
import InitializeLocalStorageButton from './InitializeLocalStorageButton';
import 'bootstrap/dist/css/bootstrap.min.css';
const MinNumber = 95;
const maxNumber = 99;
function GetTo100() {
  const [currentGames, setCurrentGames] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const quitOneGame = (index) => {
    setCurrentGames((prevGames) => prevGames.filter((game, i) => i !== index));
  };
  const addPlayerToTheGame = (player) => {
    setCurrentGames((prevGames) => [...prevGames, { player: player, disable: true }]);
  };

  const startGameFunction = () => {
    setCurrentGames((prevGames) =>
      prevGames.map((game, i) => ({
        ...game,
        disable: i === 0 ? false : true,
        number: Math.floor(Math.random() * (maxNumber - MinNumber) + MinNumber),
        isWin: false,
        numberOfSteps: 0
      }))
    );
    setStartGame(true);
  };

  function winOneGame(game) {
    if (!game.isWin) {
      let numberOfSteps = game.numberOfSteps + 1;
      let number = game.number + 1;
      let players = JSON.parse(localStorage.getItem('players')) || [];
      let player = game.player;
      let playerIndex = players.findIndex((storagePlayer) => storagePlayer.email === player.email);
      if (playerIndex !== -1) {
        players[playerIndex].AllScores = [...players[playerIndex].AllScores, numberOfSteps];
        localStorage.setItem('players', JSON.stringify(players));
      }
      return {player:player, number: number, numberOfSteps: numberOfSteps, isWin: true };
    }
    return game;
  };
  const isOnePlayer=()=> currentGames.length==1;
  const handleOperation = (operation, index) => {
    setCurrentGames((prevGames) =>
      prevGames.map((game, i) => {
        if (i === index) {
          const newNumber = eval(`${game.number} ${operation}`);
          const isWin = newNumber === 100;
          if (isWin) {
            return winOneGame(game);
          }
          else {
            return {
              ...game,
              disable:!isOnePlayer(),
              number: newNumber,
              numberOfSteps: game.numberOfSteps + 1,
              isWin: isWin,
            };
          }
        } else if ((index + 1) % prevGames.length === i) {
          return { ...game, disable: false };

        } else {
          return game;
        }
      })
    );
  };

  const handleNewGame=(gameToStart) =>{
    setCurrentGames((prevGames) =>
      prevGames.map((game) =>
        game === gameToStart ? {
          ...game,
          disable:!isOnePlayer() ,
          number: Math.floor(Math.random() * (maxNumber - MinNumber) + MinNumber),
          isWin: false,
          numberOfSteps: 0
        } : game
      )
    );
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3"><TopPlayers /></div>
          <div className="col-lg-9">
            {!initialized && <InitializeLocalStorageButton setInitialized={setInitialized} />}
            {!startGame && (
              <div className="container d-flex align-items-center justify-content-center">
                <PlayerRegistration addPlayerToTheGame={addPlayerToTheGame} />
                <button className="btn btn-outline-warning mt-3" type="button" onClick={startGameFunction}>
                  <img src="https://i.gifer.com/ZS3t.gif" style={{ width: "30%" }} alt="Start Game" disabled={!currentGames.length} />
                </button>
              </div>
            )}
            <div className='container' style={{ backgroundColor: '#eee' }}>
              {currentGames.map((game, index) => (
                <GameBoard className="col-4" key={index} index={index} game={game} handleOperation={handleOperation} currentGames={currentGames} quitOneGame={quitOneGame} handleNewGame={handleNewGame} />
              ))}
            </div>
          </div>
        </div >
      </div >
    </>
  );
}

export default GetTo100;
