import React, { useState } from 'react';
import GameBoardsDisplay from './GameBoardsDisplay';
import PlayerRegistration from './PlayerRegistration';
import TopPlayers from './TopPlayers';
import InitializeLocalStorageButton from './InitializeLocalStorageButton';

function GetTo100() {
  const [currentGames, setCurrentGames] = useState([]);
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
      }))
    );
    setStartGame(true);
  };

  const disableGame = (index) => {
    setCurrentGames((prevGames) =>
      prevGames.map((game, i) => {
        if (i === index) {
          return { ...game, disable: true };
        } else if ((index + 1) % prevGames.length === i) {
          return { ...game, disable: false };
        } else {
          return game;
        }
      })
    );
  };

  return (
    <>
    <InitializeLocalStorageButton />
    <TopPlayers/>
      {!startGame &&<div>
       <button onClick={startGameFunction}>Start Game</button>
          <PlayerRegistration addPlayerToTheGame={addPlayerToTheGame} />
       </div>}
        <GameBoardsDisplay currentGames={currentGames} disableGame={disableGame} quitOneGame={quitOneGame} startGameFunction={startGameFunction} />
    </>
  );
}

export default GetTo100;
