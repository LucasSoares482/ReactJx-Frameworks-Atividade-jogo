import React from 'react';

const GameTable = () => {
  const games = [
    {
      name: 'The Legend of Zelda: Breath of the Wild',
      platform: 'Nintendo Switch',
      year: 2017,
    },
    { name: 'God of War', platform: 'PlayStation 4', year: 2018 },
    {
      name: 'Red Dead Redemption 2',
      platform: 'PlayStation 4, Xbox One',
      year: 2018,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Nome do Jogo</th>
          <th>Plataforma</th>
          <th>Ano de Lançamento</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game, index) => (
          <tr key={index}>
            <td>{game.name}</td>
            <td>{game.platform}</td>
            <td>{game.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GameTable;
