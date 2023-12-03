import React, { useState } from 'react';
import GameBoardsDisplay from './GameBoardsDisplay';
import PlayerRegistration from './PlayerRegistration';

function getRandomNumber() {
  // Generate a random number between 1 and 100
  return Math.floor(Math.random() * 100) + 1;
}

function GetTo100() {
  const [currentGames, setCurrentGames] = useState([]);
  const [isPlayerAdd, setIsPlayerAdd] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const quitOneGame = (index) => {
    setCurrentGames((prevGames) => prevGames.filter((game, i) => i !== index));
  };

  const addPlayerToTheGame = (player) => {
    setCurrentGames((prevGames) => [...prevGames, { player: player, disable: true }]);
    setIsPlayerAdd(false);
  };

  const startGameFunction = () => {
    setCurrentGames((prevGames) =>
      prevGames.map((game, i) => ({
        ...game,
        disable: i === 0 ? false : true,
        initialNumber: getRandomNumber(),
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
      {!startGame && <button onClick={startGameFunction}>Start Game</button>}
      <div>
        {!isPlayerAdd && !startGame && (
          <button onClick={() => setIsPlayerAdd(true)}>Add Player</button>
        )}
        {isPlayerAdd && !startGame && (
          <PlayerRegistration addPlayerToTheGame={addPlayerToTheGame} />
        )}

        <GameBoardsDisplay currentGames={currentGames} disableGame={disableGame} quitOneGame={quitOneGame} startGameFunction={startGameFunction} />
      </div>
    </>
  );
}

export default GetTo100;
