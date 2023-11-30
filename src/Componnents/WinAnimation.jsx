import React from 'react';

function WinAnimation({ handleNewGame, quitGame }) {
  const imageStyle = {
    height: '80px',
    width: '80px',
  };

  return (
    <div className="win-animation">
      <img src="src\images\big-win-surprise-banner-comic-style_1017-17792.webp" alt="Win Animation" style={imageStyle} />
      <h4>CONGRATULATIONS!</h4>
      <p>You have won the game!</p>
      <button className="btn btn-success mr-2" onClick={handleNewGame}>
        New Game
      </button>
      <button className="btn btn-danger" onClick={quitGame}>
        Quit
      </button>
    </div>
  );
}

export default WinAnimation;
