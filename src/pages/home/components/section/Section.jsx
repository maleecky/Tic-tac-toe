import React from "react";
import Playermodebtn from "./component/control/Playermodebtn";
import Sidesdecoration from "./component/asides/Sidesdecoration";
import Gameboard from "./component/board/Gameboard";
import LsideDecoration from "./component/asides/LsideDecoration";

export default function Section() {
  return (
    <section className="flex flex-1 justify-center items-center flex-col w-full p-4 max-wc:px-0 ms:p-10 ">
      <div className="flex items-start justify-center w-full pt-5 relative s-absolute svg-opacity">
        <aside className="left-0 bottom-10">
          <Sidesdecoration />
        </aside>
        <div className="w-['max-content']">
          <Playermodebtn />
          <Gameboard />
        </div>
        <aside className="right-0">
          <LsideDecoration />
        </aside>
      </div>
    </section>
  );
}
