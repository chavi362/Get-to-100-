import React, { useState } from 'react'
import GameBoardsDisplay from './GameBoardsDisplay';
import PlayerRegistration from './PlayerRegistration';
function GetTo100() {
    const [currentPlayers, setcurrentPlayers] = useState([]);
    const [isPlayerAdd, setIsPlayerAdd] = useState(false);
    function addPlayerToTheGame(player) {
        setcurrentPlayers((prevPlayer) => [...prevPlayer, player]);
        setIsPlayerAdd(false);
    }

    return (
        <div>
            {!isPlayerAdd ? (
                <button onClick={() => setIsPlayerAdd(true)}>Add Player</button>
            ) :
                (
                    <PlayerRegistration addPlayerToTheGame={addPlayerToTheGame} />
                )}

            <GameBoardsDisplay currentPlayers={currentPlayers } />
        </div>
    )
}

export default GetTo100