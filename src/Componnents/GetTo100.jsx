import React, { useState } from 'react';
import GameBoardsDisplay from './GameBoardsDisplay';
import PlayerRegistration from './PlayerRegistration';
import TopPlayers from './TopPlayers';
import InitializeLocalStorageButton from './InitializeLocalStorageButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3"><TopPlayers /></div>
          <div className="col-lg-9">
            {!initialized && <InitializeLocalStorageButton setInitialized={setInitialized} />}
            {!startGame && (
              <div>
                <button type="button" onClick={startGameFunction} className="btn mb-2 mb-md-0 btn-tertiary btn-block btn-round">
                  <span>Start Game</span>
                  <div className="icon icon-round d-flex align-items-center justify-content-center">
                    <i className="bi bi-paper-plane"></i>
                  </div>
                </button>
                <PlayerRegistration addPlayerToTheGame={addPlayerToTheGame} />
              </div>
            )}
            <GameBoardsDisplay
              currentGames={currentGames}
              disableGame={disableGame}
              quitOneGame={quitOneGame}
    
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GetTo100;
