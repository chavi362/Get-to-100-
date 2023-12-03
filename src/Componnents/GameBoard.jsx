import React, { useState, useEffect } from 'react';
import WinAnimation from './WinAnimation';
 
function GameBoard(props) {
  const [number, setNumber] = useState(props.game.initialNumber || Math.floor(Math.random() * 99));
  const [countSteps, setCountSteps] = useState(0);

  useEffect(() => {
    // Check if the number is 100 and save to local storage
    if (number === 100) {
      const gameResult = {
        playerName: props.game.player.userName,
        steps: countSteps,
      };

      // Retrieve existing game results from local storage
      const existingGameResults = JSON.parse(localStorage.getItem('gameResults')) || [];
      
      // Update the game results object with the current game result
      const updatedGameResults = [...existingGameResults, gameResult]

      // Save the updated game results object back to local storage
      localStorage.setItem('gameResults', JSON.stringify(updatedGameResults));

      // Update AllScores for all player
      const updatedPlayers = props.currentGames.map((game, index) => {
        if (index === props.index) {
          // Retrieve existing AllScores from local storage
          const storedPlayerData = JSON.parse(localStorage.getItem(game.player.email)) || {};
          const existingAllScores = storedPlayerData.AllScores || [];
          return {
            ...game.player,
            AllScores: [...existingAllScores, countSteps],
          };
        } else {
          const storedPlayerData = JSON.parse(localStorage.getItem(game.player.email)) || {};
          const existingAllScores = storedPlayerData.AllScores || [];
          return {
            ...game.player,
            AllScores: [...existingAllScores, countSteps-1],
          };        
        }
      });

      // Update the player objects in local storage
      updatedPlayers.forEach((player) => {
        localStorage.setItem(player.email, JSON.stringify(player));
      });
    }
  }, [number, countSteps, props.game.player, props.index, props.initialNumber]);

  function handleOperations(operation) {
    console.log(props)
    setNumber((prevNumber) => eval(`${prevNumber} ${operation}`));
    setCountSteps((prevCount) => prevCount + 1);
    console.log(countSteps)
    props.disableGame(props.index);
  }
  function handleNewGame() {
    props.startGameFunction();
    setNumber(props.game.initialNumber || 99)
    setCountSteps(0)
  }
  function quitGame() {
    props.quitOneGame(props.index);
  }
  return (

    <div className="card mt-3">
      <div className="card-body">
        <span>{props.game.player.userName}</span>
        <p>Random Number: {number}</p>
        <span>{props.game.disable ? 'Waiting..' : 'Your turn..'}</span>
        {number == 100 ? (
        <WinAnimation handleNewGame={handleNewGame} quitGame={quitGame} />

        ) : (
          <div>
            <button disabled={props.game.disable} className="btn btn-primary mr-2" onClick={() => handleOperations('/ 2')}>
              /2
            </button>
            <button disabled={props.game.disable} className="btn btn-primary mr-2" onClick={() => handleOperations('* 2')}>
              *2
            </button>
            <button disabled={props.game.disable} className="btn btn-primary mr-2" onClick={() => handleOperations('+ 1')}>
              +1
            </button>
            <button disabled={props.game.disable} className="btn btn-primary" onClick={() => handleOperations('- 1')}>
              -1
            </button>
          </div>
        )}
        {countSteps}
      </div>
    </div>
  );
}

export default GameBoard;
