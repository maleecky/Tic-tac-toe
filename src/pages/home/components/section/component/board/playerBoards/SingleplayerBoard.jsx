import React, { useCallback, useEffect, useState } from "react";
import { checkWinWhen } from "../../utils/winCheck";
import { difficultAiPlayer, easyAi } from "../../computerTokens/aiplayer";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function SingleplayerBoard() {
  const [squares, setSquares] = useState(new Array(Array(9).fill(null)));
  const [currentMoves, setCurrentMoves] = useState(0);
  const [winsCount, setwinsCount] = useState(0);
  const [tiesCount, settiesCount] = useState(0);
  const [lossCount, setlossCount] = useState(0);
  const currentSquares = squares[currentMoves];
  const [winner, setWinner] = useState(null);
  const isEasy = useSelector((state) => state.difficultLevelToggle);
  const isLightTheme = useSelector((state) => state.themeToggle);
  const humanPlayer = "X";
  const aiPlayer = "O";

  const onPlay = useCallback(
    (board, index, player) => {
      const nextSquares = board.slice();
      nextSquares[index] = player;
      const nextHistory = [...squares.slice(0, currentMoves + 1), nextSquares];
      setSquares(nextHistory);
      setCurrentMoves(nextHistory.length - 1);
    },
    [currentMoves, squares]
  );
  useEffect(() => {
    const computerTurn = currentMoves % 2 === 1;
    const availableEmptySpot = currentSquares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);

    const playComputerAt = (index) => {
      if (currentSquares[index]) {
        return;
      }
      onPlay(currentSquares, index, aiPlayer);
    };

    const aiplayerWon =
      checkWinWhen(["O", "O", "O"], currentSquares).length > 0;
    const playerWon = checkWinWhen(["X", "X", "X"], currentSquares).length > 0;

    if (playerWon) {
      setWinner("Won");
      setwinsCount((count) => count + 1);
      return;
    } else if (aiplayerWon) {
      setWinner("Lost");
      setlossCount((count) => count + 1);
      return;
    } else if (availableEmptySpot.length === 0 && !playerWon && !aiplayerWon) {
      setWinner("Tie");
      settiesCount((count) => count + 1);
      return;
    }

    if (computerTurn) {
      if (!isEasy) {
        let bestMove = -1;
        let bestScore = -Infinity;

        for (let i = 0; i < currentSquares.length; i++) {
          if (currentSquares[i] === null) {
            currentSquares[i] = aiPlayer;
            const score = difficultAiPlayer(currentSquares, 0, false);
            currentSquares[i] = null;

            if (score > bestScore) {
              bestScore = score;
              bestMove = i;
            }
          }
        }

        if (bestMove !== -1) {
          playComputerAt(bestMove);
        }
      } else {
        easyAi(currentSquares, playComputerAt, availableEmptySpot, onPlay);
      }
    }
  }, [squares, currentSquares, isEasy, onPlay, currentMoves]);

  const handleSquareClick = (index) => {
    if (currentSquares[index]) {
      return;
    }
    const playerTurn = currentMoves % 2 === 0;

    if (playerTurn) {
      onPlay(currentSquares, index, humanPlayer);
    }
  };

  return (
    <div className="flex flex-1 items-center py-6">
      <div className="flex flex-col items-center space-y-2.5 m-auto">
        <div className="flex items-end text-lg"></div>
        <div className="flex relative">
          <div
            className={`game-board ${
              isLightTheme ? "light-theme-board" : "dark-theme-board"
            } relative pb-4`}
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
        <div
          className={`score-board  background-crl  flex w-full justify-between capitalize`}
        >
          <div>
            player<div>{winsCount}</div>
          </div>
          <div>
            tie<div>{tiesCount}</div>
          </div>
          <div>
            computer<div>{lossCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
