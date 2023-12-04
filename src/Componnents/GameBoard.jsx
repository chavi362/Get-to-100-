import React, { useState, useEffect } from 'react';
import WinAnimation from './WinAnimation';

function GameBoard(props) {
  const [number, setNumber] = useState(props.initialNumber || Math.floor(Math.random() * 99));
  const [countSteps, setCountSteps] = useState(0);
  function checkWin() {
    if (number == 100) {
       
    }
  }
  function handleOperations(operation) {
    setNumber((prevNumber) => eval(`${prevNumber} ${operation}`));
    setCountSteps((prevCount) => prevCount + 1);
    props.disableGame(props.index);
    checkWin()
  }
  function handleNewGame() {
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
        <span>steps: {countSteps}</span>
      </div>
    </div>
  );
}

export default GameBoard;
