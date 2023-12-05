import React from 'react';

function WinAnimation({ handleNewGame, quitGame }) {
  const imageStyle = {
    height: '210px',
    width: '210px',
  };
  return (
    <div className="win-animation">
      <img src="src\images\win.webp" alt="Win Animation"style={imageStyle}  />
      <h4>CONGRATULATIONS!</h4>
      <p>You have won the game!</p>
      <button className="btn btn-warning" style={{ color: "white", border: "none" }}onClick={handleNewGame}>
        New Game
      </button>
      <button className="btn btn-danger" onClick={quitGame}>
        Quit
      </button>
    </div>
  );
}
export default WinAnimation;
