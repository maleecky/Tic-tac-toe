import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SingleplayerBoard from "./playerBoards/SingleplayerBoard";
import MultiplayerBoard from "./playerBoards/MultiplayerBoard";

export default function Gameboard() {
  const isSinglePlayer = useSelector((state) => state.playerMode);

  if (isSinglePlayer) {
    return <SingleplayerBoard />;
  } else {
    return <MultiplayerBoard />;
  }
}
