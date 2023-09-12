import React, { useEffect, useState } from "react";
import { checkWinWhen } from "../../utils/winCheck";

export default function MultiplayerBoard({ isLightTheme }) {
  const [squares, setSquares] = useState(new Array(Array(9).fill(null)));
  const [currentMoves, setCurrentMoves] = useState(0);
  const isXNext = currentMoves % 2 === 0;
  const [winsCount, setwinsCount] = useState(0);
  const [tiesCount, settiesCount] = useState(0);
  const [lossCount, setlossCount] = useState(0);
  const currentSquares = squares[currentMoves];
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const player1 = checkWinWhen(["X", "X", "X"], currentSquares).length > 0;
    const player2 = checkWinWhen(["O", "O", "O"], currentSquares).length > 0;
    if (player1) {
      setWinner("X won");
      setwinsCount((count) => count + 1);
      return;
    } else if (player2) {
      setWinner("O won");
      setlossCount((count) => count + 1);
      return;
    }
    if (currentSquares.every((val) => val !== null) && !player1 && !player2) {
      setWinner("tie");
      settiesCount((count) => count + 1);
    }
  }, [currentSquares]);

  const handleSquareClick = (index) => {
    if (currentSquares[index]) {
      return;
    }
    let player;

    if (isXNext) {
      player = "X";
    } else {
      player = "O";
    }

    onPlay(currentSquares, index, player);
  };

  function onPlay(board, index, player) {
    const nextSquares = board.slice();
    nextSquares[index] = player;
    const nextHistory = [...squares.slice(0, currentMoves + 1), nextSquares];
    setSquares(nextHistory);
    setCurrentMoves(nextHistory.length - 1);
  }
  return (
    <div className="flex flex-1 py-6 items-center">
      <div className="flex flex-col items-center space-y-2.5 m-auto">
        <div className="flex items-end text-lg">
          Next player is {isXNext ? "X" : "O"}
        </div>
        <div className="flex relative">
          <div
            className={`game-board ${
              isLightTheme ? "light-theme-board" : "dark-theme-board"
            } relative`}
          >
            {currentSquares.map((square, index) => {
              return (
                <button
                  className={` ${
                    isLightTheme
                      ? "btns-wrapper-shadow-light clr-strong-gray"
                      : "btns-wrapper-shadow-dark clr-strong-shadow-gray"
                  }`}
                  onClick={() => handleSquareClick(index)}
                  key={index}
                >
                  {square}
                </button>
              );
            })}
            {winner && (
              <div
                className={` custom-siblings absolute top-0 w-full h-full flex justify-center items-center flex-col ${
                  winner === "Lost" ? "bg-red-500" : "bg-green-500"
                } bg-opacity-70 backdrop-blur-sm`}
              >
                <p className="capitallize">{winner}</p>
                <div className="w-full flex items-center">
                  <button
                    className="capitalize"
                    style={{ color: isLightTheme ? "black" : "#4d4d4d" }}
                    onClick={() => {
                      setCurrentMoves(0);
                      setWinner(null);
                    }}
                  >
                    reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="score-board background-crl flex w-full justify-between p-4 capitalize">
          <div>
            player X<div>{winsCount}</div>
          </div>
          <div>
            tie<div>{tiesCount}</div>
          </div>
          <div>
            player O<div>{lossCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
