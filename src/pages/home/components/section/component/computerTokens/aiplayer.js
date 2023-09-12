import { checkWinWhen } from "../utils/winCheck";
import { evaluate } from "../utils/winCheck";

export const easyAi = (currentSquares, playComputerAt, availableEmptySpot) => {
  const bestPattern = checkWinWhen(["O", "O", null], currentSquares);
  if (bestPattern.length > 0) {
    const bestMove = bestPattern[0].filter(
      (index) => currentSquares[index] === null
    )[0];
    playComputerAt(bestMove);
    return;
  }
  const defendPattern = checkWinWhen(["X", "X", null], currentSquares);
  if (defendPattern.length > 0) {
    const bestMove = defendPattern[0].filter(
      (index) => currentSquares[index] === null
    )[0];
    playComputerAt(bestMove);
    return;
  }
  const continuePattern = checkWinWhen(["O", null, null], currentSquares);

  if (continuePattern.length > 0) {
    const bestMove = continuePattern[0].filter(
      (index) => currentSquares[index] === null
    )[0];
    playComputerAt(bestMove);
    return;
  }
  const randomIndex =
    availableEmptySpot[Math.floor(Math.random() * availableEmptySpot.length)];
  playComputerAt(randomIndex);
};

export const difficultAiPlayer = (board, depth, isMaximizing) => {
  const aiPlayer = "O";
  const humanPlayer = "X";

  const score = evaluate(board, humanPlayer, aiPlayer);

  if (score !== 0) {
    return score;
  }

  if (board.every((item) => item !== null)) {
    return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = aiPlayer;
        const score = difficultAiPlayer(board, depth + 1, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = humanPlayer;
        const score = difficultAiPlayer(board, depth + 1, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};
