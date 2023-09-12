import React from "react";

export default function About() {
  return (
    <div className="w-full md:w-[75%]   m-auto space-y-10 text-lg max-sm:text-base py-10 leading-relaxed">
      <h1>About the Game</h1>
      <div className="text-center flex flex-1 items-center">
        <p className="font-normal">
          Welcome to the Tic-Tac-Toe game, where classic entertainment meets
          modern technology. This project was born out of a passion for game
          development and a desire to explore the capabilities of React, a
          popular JavaScript library. Creating an interactive and enjoyable
          version of this timeless game.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">Key features:</h2>
        <ul className="list-disc pl-4 sm:pl-10 font-normal">
          <li>
            React-Powered: We've harnessed the power of React to bring you a
            seamless and dynamic gaming experience. React's component-based
            architecture allows us to efficiently manage the game's logic and
            user interface.
          </li>
          <li>
            Multiplayer Fun: Challenge your friends or family to a friendly
            match of Tic-Tac-Toe. Our game supports multiplayer mode, so you can
            enjoy strategic battles with loved ones no matter where they are.
          </li>
          <li>
            Responsive Design: Whether you're playing on a desktop, tablet, or
            smartphone, our game adapts to your screen size. It's designed with
            responsiveness in mind, ensuring a smooth experience on all devices.
          </li>
        </ul>
      </div>
      <div className="max-sm: hidden">
        <h2 className="font-bold">Meet with Developer:</h2>
        <div className="font-normal">
          <span className="font-bold">Abdumarick omary: Lead Developer</span> -
          Abdumarick is a passionate web developer with a knack for turning
          ideas into reality. He spearheaded the game's development, ensuring it
          met the highest standards of quality and user experience.
        </div>
      </div>
      <div>
        <h2 className="font-bold">My Mission:</h2>

        <div className="font-normal">
          My mission is simple: to provide you with a fun and engaging gaming
          experience while showcasing the potential of React in web development.
          I believe that learning through play is one of the best ways to
          understand technology, and we hope our Tic-Tac-Toe game inspires
          others to explore the world of web development. So, what are you
          waiting for? Dive into a game of Tic-Tac-Toe and experience the magic
          of React in action. We're excited to have you here, and we hope you
          enjoy every moment spent playing our game.
          <p>Thank you for choosing Tic-Tac-Toe game!</p>
        </div>
      </div>
    </div>
  );
}
