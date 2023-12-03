import React, { useState } from 'react';
import GameBoard from './GameBoard';
import 'bootstrap/dist/css/bootstrap.min.css';

function GameBoardsDisplay(props) {
     let games=props.currentGames;

    return (
        <div className='container' style={{ backgroundColor: '#eee' }}>
            {games.map((game, index) => (
                <GameBoard className="col-4"  initialNumber={99}key={index} index={index} game={game} disableGame={props.disableGame} currentGames={props.currentGames} quitOneGame={props.quitOneGame} startGameFunction={props.startGameFunction} />
            ))}
        </div>
    );
}
export default GameBoardsDisplay;
