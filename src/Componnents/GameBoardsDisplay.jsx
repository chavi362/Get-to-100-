import React, { useState } from 'react';
import GameBoard from './GameBoard';

function GameBoardsDisplay(props) {
     let games=props.currentGames;

    return (
        <div>
            {games.map((game, index) => (
                <GameBoard key={index} index={index} game={game} disableGame={props.disableGame} quitOneGame={props.quitOneGame} />
            ))}
        </div>
    );
}

export default GameBoardsDisplay;
