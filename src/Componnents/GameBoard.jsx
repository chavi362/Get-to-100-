import React, { useState } from 'react';
import WinAnimation from './WinAnimation';
 
function GameBoard(props) {
  const [number, setNumber] = useState(99);
  const [countSteps, setCountSteps] = useState(0);

  function handleOperations(operation) {
    setNumber((prevNumber) => eval(`${prevNumber} ${operation}`));
    setCountSteps((prevCount) => prevCount + 1);

    props.disableGame(props.index);
  }
  function handleNewGame() {

  }
  function quitGame() {
    props.quitOneGame(props.index);
  }
  return (

    <div className="card mt-3">
      <div className="card-body">
        <span>{props.game.player.userName}</span>
        <p>Random Number: {number}</p>
        <span>{props.game.disable ? 'disable' : 'enable'}</span>
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