import React, { useState } from 'react';

function GameBoard(props) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [countSteps, setCountSteps] = useState(0);

  function handleOperations(operation) {
    setNumber((prevNumber) => eval(`${prevNumber} ${operation}`));
    setCountSteps((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <span>{props.game.player.username}</span>
      <p>Random Number: {number}</p>
      <p>{props.game.player.disable}</p>
      <button onClick={() => handleOperations('/ 2')}>/2</button>
      <button onClick={() => handleOperations('* 2')}>*2</button>
      <button onClick={() => handleOperations('+ 1')}>+1</button>
      <button onClick={() => handleOperations('- 1')}>-1</button>
      {countSteps}
    </div>
  );
}

export default GameBoard;