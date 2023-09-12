import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { PLAYER_MODE } from "../../../../../../redux/actions/GlobalActions";

export default function Playermodebtn() {
  const dispatch = useDispatch();
  const isSinglePlayer = useSelector((state) => state.playerMode);
  return (
    <div className=" space-x-0 max-xsm:space-y-5 xsm:space-x-5 btns-wrapper max-xsm:w-full  flex flex-col xsm:flex-row">
      <button
        onClick={() => {
          dispatch({
            type: PLAYER_MODE,
            payLoad: {
              val: true,
            },
          });
        }}
        className={isSinglePlayer ? "active-btn" : undefined}
      >
        Single-player mode
      </button>
      <button
        onClick={() => {
          dispatch({
            type: PLAYER_MODE,
            payLoad: {
              val: false,
            },
          });
        }}
        className={!isSinglePlayer ? "active-btn" : undefined}
      >
        Multiplayer mode
      </button>
    </div>
  );
}
