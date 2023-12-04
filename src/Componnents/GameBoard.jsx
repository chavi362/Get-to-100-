import React from 'react';
import WinAnimation from './WinAnimation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

function GameBoard(props) {
  const handleQuitGame = () => {
    props.quitOneGame(props.index);
  };
  const handleNewGameIndex = () => {
    props.handleNewGame(props.game);
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <span>{props.game.player.userName}</span>
        <br />
        <span>{props.game.disable ? 'Waiting..' : 'Your turn..'}</span>
        {props.game.number && <p>Random Number: {props.game.number}</p>}
        {props.game.isWin ? (
          <WinAnimation handleNewGame={handleNewGameIndex} quitGame={handleQuitGame} />
        ) : (
          <div>
            <Button variant="btn btn-warning" style={{ color: "white", border: "none" }} disabled={props.game.disable} className="btn btn-primary mr-2" onClick={() => props.handleOperation('/ 2', props.index)}>
              /2
            </Button>
            <Button variant="btn btn-warning" style={{ color: "white", border: "none" }} disabled={props.game.disable} className="btn btn-primary mr-2" onClick={() => props.handleOperation('* 2', props.index)}>
              *2
            </Button>
            <Button variant="btn btn-warning" style={{ color: "white", border: "none" }} disabled={props.game.disable} className="btn btn-primary mr-2" onClick={() => props.handleOperation('+ 1', props.index)}>
              +1
            </Button>
            <Button variant="btn btn-warning" style={{ color: "white", border: "none" }} disabled={props.game.disable} className="btn btn-primary" onClick={() => props.handleOperation('- 1', props.index)}>
              -1
            </Button>
          </div>
        )}

        {props.game.number && <span>steps: {props.game.numberOfSteps}</span>}
      </div>
    </div>
  );
}

export default GameBoard;
