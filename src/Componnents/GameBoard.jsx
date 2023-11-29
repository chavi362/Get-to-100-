import React, { useState } from 'react';

function GameBoard(props) {
  console.log(props.game);

  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [countSteps, setcountSteps] = useState(0);
  function handleOperations(operation) {
    setNumber((prevNumber) => eval(`${prevNumber} ${operation}`));
    setcountSteps((prevCount) => prevCount += 1);
  }
  return (
    <div>
      <span>{props.game.player.userName}</span>
      <p>Random Number: {number}</p>
      <button onClick={() => handleOperations('/ 2')}>/2</button>
      <button onClick={() => handleOperations('* 2')}>*2</button>
      <button onClick={() => handleOperations('+ 1')}>+1</button>
      <button onClick={() => handleOperations('- 1')}>-1</button>
      {countSteps}
    </div>
  );
}

export default GameBoard;
