import React, { useState } from 'react';
import GameBoard from './GameBoard';

function GameBoardsDisplay(props) {
    const [games, setGames] = useState(props.currentPlayers.map((player, index) => ({ player: player, disable: index === 0 ? false : true })));

    console.log(games);

    if (games.length !== props.currentPlayers.length) {
        setGames(props.currentPlayers.map((player, index) => ({ player: player, disable: index === 0 ? false : true })));
    }

    return (
        <div>
            {games.map((game, index) => (
                <GameBoard key={index} game={game} />
            ))}
        </div>
    );
}

export default GameBoardsDisplay;
