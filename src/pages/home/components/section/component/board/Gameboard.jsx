import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SingleplayerBoard from "./playerBoards/SingleplayerBoard";
import MultiplayerBoard from "./playerBoards/MultiplayerBoard";

export default function Gameboard() {
  const isSinglePlayer = useSelector((state) => state.playerMode);
  const isLightTheme = useSelector((state) => state.themeToggle);

  if (isSinglePlayer) {
    return <SingleplayerBoard isLightTheme={isLightTheme} />;
  } else {
    return <MultiplayerBoard isLightTheme={isLightTheme} />;
  }
}
