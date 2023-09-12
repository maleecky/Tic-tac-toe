import React from "react";
import Lottie from "lottie-react";
import tictactoeAnimation from "../../assets/Jsons/ticktoe_white.json";
import whitetictacAnimation from "../../assets/Jsons/9KfdB5RX4w.json";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function Blog() {
  const isLightTheme = useSelector((state) => state.themeToggle);
  return (
    <div className="space-y-6 w-full md:w-[75%] m-auto  leading-relaxed py-10 text-lg ">
      <h1>Tic-Tac-Toe: A Classic Game of Strategy</h1>
      <div className="font-normal">
        Tic-Tac-Toe, also known as Noughts and Crosses, is a classic two player
        board game played on a 3x3 grid. its a simple yet engaging game that
        requires strategic thinking and quick decision-making. Here's how you
        play it:
      </div>
      <div>
        <h2>Objective:</h2>
        <div className="font-normal">
          The goal of Tic-Tac-Toe is to be the first player to form a line of
          three of your symbols in a row, either horizontally,vertically, or
          diagonally, on the game board. Setup:{" "}
          <ul>
            <li>
              1.Draw a 3x3 grid on a piece of paper or use a dedicated game
              board.
            </li>
            <li>2.Choose two players, often represented as "X" and "O".</li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Gameplay:</h2>
        <div className="font-normal">
          players take turns to make their moves by placing their symbol on a
          empty cell within the grid. The player using "X" usually goes first,
          and then they alternate turns.
        </div>
      </div>
      <div>
        <h2>Winning:</h2>
        <div className="font-normal">
          A player wins when they successfully create a line of three of their
          symbols in a row, either horizontally, vertically or diagonally. The
          game immediately ends when a player achieves this. Draw: If all cells
          are filled, and no player has formed a winning line, the game results
          in a draw, and neither player wins.
        </div>
      </div>
      <div>
        <h2>Sample Gameplay:</h2>
        <ul className="font-normal">
          Here's an example of how a game of Tic-Tac-Toe might progress:
          <li>
            1. Player X goes first, placing an X in one of the empty cells.
          </li>
          <li>2. Player O takes their turn, placing an O in an empty cell.</li>
          <li>
            3. The game continues with players taking turns until one of them
            forms a winning line or the game ends in a draw.
          </li>
        </ul>
        <div className="w-full flex justify-center">
          {isLightTheme ? (
            <Lottie
              animationData={tictactoeAnimation}
              style={{ width: 200, height: 200 }}
            />
          ) : (
            <Lottie
              animationData={whitetictacAnimation}
              style={{ width: 200, height: 200 }}
            />
          )}
        </div>
      </div>
      <div>
        <h2>Strategy: </h2>
        <div className="font-normal">
          To increase your chances of winning, you'll need to plan your moves
          strategically. Try to create forks(two possible ways to win) and block
          your opponent from forming winning lines. If your opponent creates a
          potential winning line, be sure to block it on your turn.
        </div>
        <div className="font-normal">
          Tic-Tac-Toe is a game that's easy to learn but offers a surprising
          depth of strategy, making it a timeless and enjoyable pastime for
          players of all ages. it's often used as a teaching tool for basic game
          theory and decision-making.
        </div>
      </div>
    </div>
  );
}
