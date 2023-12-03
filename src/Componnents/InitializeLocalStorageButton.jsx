import React from 'react';

function InitializeLocalStorageButton() {
  const initializeLocalStorage = () => {
    const players = [];

    for (let i = 1; i <= 5; i++) {
      const email = `p${i}@example.com`;
      const password = '1';
      const userName=`player${i}`;
      const allScores = Array.from({ length: 5 }, () => Math.floor(Math.random() * 11) + 10);
      const player = {
        email,
        userName,
        password,
        AllScores: allScores,
      };
      players.push(player);
    }
    localStorage.setItem('players', JSON.stringify(players));
  };

  return (
    <button onClick={initializeLocalStorage}>
      Initialize Local Storage
    </button>
  );
}

export default InitializeLocalStorageButton;
