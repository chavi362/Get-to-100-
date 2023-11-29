import React, { useState } from 'react'
import GameBoard from './GameBoard';
function GameBoardsDisplay(props) {
    function getGames() {
        return props.currentPlayers.map((player, index) => ({ player: player, disable: index===0?false:true }));
    }
    const [games, setGames] = useState(getGames());
    console.log(games);

    return (
        <div>
            {games.map((game, index) =>
                <GameBoard key={index} game={game} />
            )}
        </div>
    )
}
export default GameBoardsDisplay