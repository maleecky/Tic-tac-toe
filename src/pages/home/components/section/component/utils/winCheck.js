const winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinWhen = ([a, b, c], squares) => {
  return winComb.filter((indexes) => {
    const squaredIndexes = indexes.map((index) => squares[index]);
    return (
      JSON.stringify([a, b, c].sort()) === JSON.stringify(squaredIndexes.sort())
    );
  });
};

export const evaluate = (squares, player, computer_token) => {
  for (let i = 0; i < winComb.length; i++) {
    const [a, b, c] = winComb[i];

    if (
      squares[a] === computer_token &&
      squares[b] === computer_token &&
      squares[c] === computer_token
    ) {
      return 10;
    } else if (
      squares[a] === player &&
      squares[b] === player &&
      squares[c] === player
    ) {
      return -10;
    }
  }

  return 0;
};
